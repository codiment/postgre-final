import { SetMetadata } from '@nestjs/common';
import { OrganizationMemberRole } from 'generated/prisma';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: OrganizationMemberRole[]) =>
  SetMetadata(ROLES_KEY, roles);
