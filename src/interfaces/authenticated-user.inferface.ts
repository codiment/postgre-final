import { OrganizationMemberRole, UserType } from 'generated/prisma';

export interface AutheticatedRequest extends Request {
  user: {
    userId: string;
    email: string;
    type: UserType;
    orgs: {
      id: string;
      role: OrganizationMemberRole;
    }[];
  };
}
