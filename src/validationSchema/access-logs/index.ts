import * as yup from 'yup';

export const accessLogValidationSchema = yup.object().shape({
  access_time: yup.date().required(),
  exit_time: yup.date().nullable(),
  access_point: yup.string().required(),
  purpose: yup.string().required(),
  user_id: yup.string().nullable().required(),
  school_id: yup.string().nullable().required(),
});
