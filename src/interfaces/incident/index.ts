import { SchoolInterface } from 'interfaces/school';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface IncidentInterface {
  id?: string;
  incident_type: string;
  incident_date: any;
  description: string;
  school_id: string;
  reported_by: string;
  created_at?: any;
  updated_at?: any;

  school?: SchoolInterface;
  user?: UserInterface;
  _count?: {};
}

export interface IncidentGetQueryInterface extends GetQueryInterface {
  id?: string;
  incident_type?: string;
  description?: string;
  school_id?: string;
  reported_by?: string;
}
