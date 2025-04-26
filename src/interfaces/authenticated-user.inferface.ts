import { Role } from "generated/prisma";

export interface AutheticatedRequest extends Request  {
  user: {
    userId : string;
    email : string;
    role: Role
  };
}