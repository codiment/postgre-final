/*
  Warnings:

  - The values [MEMBER] on the enum `OrganizationMemberRole` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "OrganizationMemberRole_new" AS ENUM ('MANAGER', 'REGULAR');
ALTER TABLE "OrganizationMembership" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "OrganizationMembership" ALTER COLUMN "role" TYPE "OrganizationMemberRole_new" USING ("role"::text::"OrganizationMemberRole_new");
ALTER TYPE "OrganizationMemberRole" RENAME TO "OrganizationMemberRole_old";
ALTER TYPE "OrganizationMemberRole_new" RENAME TO "OrganizationMemberRole";
DROP TYPE "OrganizationMemberRole_old";
ALTER TABLE "OrganizationMembership" ALTER COLUMN "role" SET DEFAULT 'MANAGER';
COMMIT;

-- AlterTable
ALTER TABLE "OrganizationMembership" ALTER COLUMN "role" SET DEFAULT 'MANAGER';
