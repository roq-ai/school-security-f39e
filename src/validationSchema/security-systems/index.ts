import * as yup from 'yup';

export const securitySystemValidationSchema = yup.object().shape({
  name: yup.string().required(),
  model: yup.string().required(),
  manufacturer: yup.string().required(),
  installation_date: yup.date().required(),
  last_maintenance_date: yup.date().nullable(),
  school_id: yup.string().nullable().required(),
});
