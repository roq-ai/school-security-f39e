import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { maintenanceLogValidationSchema } from 'validationSchema/maintenance-logs';
import { SecuritySystemInterface } from 'interfaces/security-system';
import { UserInterface } from 'interfaces/user';
import { MaintenanceLogInterface } from 'interfaces/maintenance-log';

function MaintenanceLogCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: MaintenanceLogInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.maintenance_log.create({ data: values as RoqTypes.maintenance_log });
      resetForm();
      router.push('/maintenance-logs');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<MaintenanceLogInterface>({
    initialValues: {
      maintenance_date: new Date(new Date().toDateString()),
      description: '',
      next_maintenance_date: new Date(new Date().toDateString()),
      security_system_id: (router.query.security_system_id as string) ?? null,
      maintained_by: (router.query.maintained_by as string) ?? null,
    },
    validationSchema: maintenanceLogValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Maintenance Logs',
              link: '/maintenance-logs',
            },
            {
              label: 'Create Maintenance Log',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Maintenance Log
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <FormControl id="maintenance_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Maintenance Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.maintenance_date ? new Date(formik.values?.maintenance_date) : null}
              onChange={(value: Date) => formik.setFieldValue('maintenance_date', value)}
            />
          </FormControl>

          <TextInput
            error={formik.errors.description}
            label={'Description'}
            props={{
              name: 'description',
              placeholder: 'Description',
              value: formik.values?.description,
              onChange: formik.handleChange,
            }}
          />

          <FormControl id="next_maintenance_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Next Maintenance Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.next_maintenance_date ? new Date(formik.values?.next_maintenance_date) : null}
              onChange={(value: Date) => formik.setFieldValue('next_maintenance_date', value)}
            />
          </FormControl>
          <AsyncSelect<SecuritySystemInterface>
            formik={formik}
            name={'security_system_id'}
            label={'Select Security System'}
            placeholder={'Select Security System'}
            fetcher={() => roqClient.security_system.findManyWithCount({})}
            labelField={'name'}
          />
          <AsyncSelect<UserInterface>
            formik={formik}
            name={'maintained_by'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={() => roqClient.user.findManyWithCount({})}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/maintenance-logs')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'maintenance_log',
    operation: AccessOperationEnum.CREATE,
  }),
)(MaintenanceLogCreatePage);
