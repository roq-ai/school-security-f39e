import { UserInterface } from 'interfaces/user';
import { SchoolInterface } from 'interfaces/school';
import { GetQueryInterface } from 'interfaces';

export interface AccessLogInterface {
  id?: string;
  user_id: string;
  school_id: string;
  access_time: any;
  exit_time?: any;
  access_point: string;
  purpose: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  school?: SchoolInterface;
  _count?: {};
}

export interface AccessLogGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  school_id?: string;
  access_point?: string;
  purpose?: string;
}
