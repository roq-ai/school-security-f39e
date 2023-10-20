import * as yup from 'yup';

export const maintenanceLogValidationSchema = yup.object().shape({
  maintenance_date: yup.date().required(),
  description: yup.string().required(),
  next_maintenance_date: yup.date().nullable(),
  security_system_id: yup.string().nullable().required(),
  maintained_by: yup.string().nullable().required(),
});
