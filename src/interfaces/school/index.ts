import { AccessLogInterface } from 'interfaces/access-log';
import { IncidentInterface } from 'interfaces/incident';
import { SecuritySystemInterface } from 'interfaces/security-system';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SchoolInterface {
  id?: string;
  description?: string;
  location?: string;
  established_year?: number;
  total_students?: number;
  total_staff?: number;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  access_log?: AccessLogInterface[];
  incident?: IncidentInterface[];
  security_system?: SecuritySystemInterface[];
  user?: UserInterface;
  _count?: {
    access_log?: number;
    incident?: number;
    security_system?: number;
  };
}

export interface SchoolGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  location?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
