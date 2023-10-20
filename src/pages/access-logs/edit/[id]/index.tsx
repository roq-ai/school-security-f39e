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
  Center,
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
import { FunctionComponent, useState, useRef, useMemo } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { ImagePicker } from 'components/image-file-picker';
import { useRoqClient, useAccessLogFindFirst } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';
import { convertQueryToPrismaUtil } from 'lib/utils';
import { accessLogValidationSchema } from 'validationSchema/access-logs';
import { AccessLogInterface } from 'interfaces/access-log';
import { UserInterface } from 'interfaces/user';
import { SchoolInterface } from 'interfaces/school';

function AccessLogEditPage() {
  const router = useRouter();
  const id = router.query.id as string;

  const roqClient = useRoqClient();
  const queryParams = useMemo(
    () =>
      convertQueryToPrismaUtil(
        {
          id,
        },
        'access_log',
      ),
    [id],
  );
  const { data, error, isLoading, mutate } = useAccessLogFindFirst(queryParams, {}, { disabled: !id });
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (values: AccessLogInterface, { resetForm }: FormikHelpers<any>) => {
    setFormError(null);
    try {
      const updated = await roqClient.access_log.update({
        data: values as RoqTypes.access_log,
        where: {
          id,
        },
      });
      mutate(updated);
      resetForm();
      router.push('/access-logs');
    } catch (error: any) {
      if (error?.response.status === 403) {
        setFormError({ message: "You don't have permisisons to update this resource" });
      } else {
        setFormError(error);
      }
    }
  };

  const formik = useFormik<AccessLogInterface>({
    initialValues: data,
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
              label: 'Update Access Log',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Update Access Log
          </Text>
        </Box>
        {(error || formError) && (
          <Box mb={4}>
            <Error error={error || formError} />
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
    operation: AccessOperationEnum.UPDATE,
  }),
)(AccessLogEditPage);
