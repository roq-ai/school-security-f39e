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

import { accessLogValidationSchema } from 'validationSchema/access-logs';
import { UserInterface } from 'interfaces/user';
import { SchoolInterface } from 'interfaces/school';
import { AccessLogInterface } from 'interfaces/access-log';

function AccessLogCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: AccessLogInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.access_log.create({ data: values as RoqTypes.access_log });
      resetForm();
      router.push('/access-logs');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<AccessLogInterface>({
    initialValues: {
      access_time: new Date(new Date().toDateString()),
      exit_time: new Date(new Date().toDateString()),
      access_point: '',
      purpose: '',
      user_id: (router.query.user_id as string) ?? null,
      school_id: (router.query.school_id as string) ?? null,
    },
    validationSchema: accessLogValidationSchema,
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
              label: 'Access Logs',
              link: '/access-logs',
            },
            {
              label: 'Create Access Log',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Access Log
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <FormControl id="access_time" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Access Time
            </FormLabel>
            <DatePicker
              selected={formik.values?.access_time ? new Date(formik.values?.access_time) : null}
              onChange={(value: Date) => formik.setFieldValue('access_time', value)}
            />
          </FormControl>
          <FormControl id="exit_time" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Exit Time
            </FormLabel>
            <DatePicker
              selected={formik.values?.exit_time ? new Date(formik.values?.exit_time) : null}
              onChange={(value: Date) => formik.setFieldValue('exit_time', value)}
            />
          </FormControl>

          <TextInput
            error={formik.errors.access_point}
            label={'Access Point'}
            props={{
              name: 'access_point',
              placeholder: 'Access Point',
              value: formik.values?.access_point,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.purpose}
            label={'Purpose'}
            props={{
              name: 'purpose',
              placeholder: 'Purpose',
              value: formik.values?.purpose,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={() => roqClient.user.findManyWithCount({})}
            labelField={'email'}
          />
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
              onClick={() => router.push('/access-logs')}
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
    entity: 'access_log',
    operation: AccessOperationEnum.CREATE,
  }),
)(AccessLogCreatePage);
