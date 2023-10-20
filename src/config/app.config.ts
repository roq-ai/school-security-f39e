interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['School Administrator'],
  customerRoles: ['Parent'],
  tenantRoles: ['School Administrator', 'Security Manager', 'IT Support Staff'],
  tenantName: 'School',
  applicationName: 'School Security System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage own user information',
    'Read school information',
    'Read security system information',
    'Read access log',
  ],
  ownerAbilities: [
    'Manage school information',
    'Manage user information',
    'Manage security system',
    'Manage incidents',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/d9fe81b9-c721-4b87-b59a-5cb2fb825ee4',
};
