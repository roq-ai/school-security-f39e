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

import { securitySystemValidationSchema } from 'validationSchema/security-systems';
import { SchoolInterface } from 'interfaces/school';
import { SecuritySystemInterface } from 'interfaces/security-system';

function SecuritySystemCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: SecuritySystemInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.security_system.create({ data: values as RoqTypes.security_system });
      resetForm();
      router.push('/security-systems');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<SecuritySystemInterface>({
    initialValues: {
      name: '',
      model: '',
      manufacturer: '',
      installation_date: new Date(new Date().toDateString()),
      last_maintenance_date: new Date(new Date().toDateString()),
      school_id: (router.query.school_id as string) ?? null,
    },
    validationSchema: securitySystemValidationSchema,
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
              label: 'Security Systems',
              link: '/security-systems',
            },
            {
              label: 'Create Security System',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Security System
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.name}
            label={'Name'}
            props={{
              name: 'name',
              placeholder: 'Name',
              value: formik.values?.name,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.model}
            label={'Model'}
            props={{
              name: 'model',
              placeholder: 'Model',
              value: formik.values?.model,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.manufacturer}
            label={'Manufacturer'}
            props={{
              name: 'manufacturer',
              placeholder: 'Manufacturer',
              value: formik.values?.manufacturer,
              onChange: formik.handleChange,
            }}
          />

          <FormControl id="installation_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Installation Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.installation_date ? new Date(formik.values?.installation_date) : null}
              onChange={(value: Date) => formik.setFieldValue('installation_date', value)}
            />
          </FormControl>
          <FormControl id="last_maintenance_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Last Maintenance Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.last_maintenance_date ? new Date(formik.values?.last_maintenance_date) : null}
              onChange={(value: Date) => formik.setFieldValue('last_maintenance_date', value)}
            />
          </FormControl>
          <AsyncSelect<SchoolInterface>
            formik={formik}
            name={'school_id'}
            label={'Select School'}
            placeholder={'Select School'}
            fetcher={() => roqClient.school.findManyWithCount({})}
            labelField={'name'}
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
              onClick={() => router.push('/security-systems')}
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
    entity: 'security_system',
    operation: AccessOperationEnum.CREATE,
  }),
)(SecuritySystemCreatePage);
