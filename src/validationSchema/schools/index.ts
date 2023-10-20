import * as yup from 'yup';

export const schoolValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  location: yup.string().nullable(),
  established_year: yup.number().integer().nullable(),
  total_students: yup.number().integer().nullable(),
  total_staff: yup.number().integer().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
