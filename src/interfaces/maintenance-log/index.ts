import { SecuritySystemInterface } from 'interfaces/security-system';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface MaintenanceLogInterface {
  id?: string;
  security_system_id: string;
  maintenance_date: any;
  maintained_by: string;
  description: string;
  next_maintenance_date?: any;
  created_at?: any;
  updated_at?: any;

  security_system?: SecuritySystemInterface;
  user?: UserInterface;
  _count?: {};
}

export interface MaintenanceLogGetQueryInterface extends GetQueryInterface {
  id?: string;
  security_system_id?: string;
  maintained_by?: string;
  description?: string;
}
