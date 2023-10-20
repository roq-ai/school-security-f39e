import { MaintenanceLogInterface } from 'interfaces/maintenance-log';
import { SchoolInterface } from 'interfaces/school';
import { GetQueryInterface } from 'interfaces';

export interface SecuritySystemInterface {
  id?: string;
  name: string;
  model: string;
  manufacturer: string;
  installation_date: any;
  last_maintenance_date?: any;
  school_id: string;
  created_at?: any;
  updated_at?: any;
  maintenance_log?: MaintenanceLogInterface[];
  school?: SchoolInterface;
  _count?: {
    maintenance_log?: number;
  };
}

export interface SecuritySystemGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  model?: string;
  manufacturer?: string;
  school_id?: string;
}
