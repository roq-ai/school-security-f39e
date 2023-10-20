import * as yup from 'yup';

export const incidentValidationSchema = yup.object().shape({
  incident_type: yup.string().required(),
  incident_date: yup.date().required(),
  description: yup.string().required(),
  school_id: yup.string().nullable().required(),
  reported_by: yup.string().nullable().required(),
});
