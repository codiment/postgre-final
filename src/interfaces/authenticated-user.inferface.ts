import { UserType } from "generated/prisma";

export interface AutheticatedRequest extends Request {
  user: {
    userId: string;
    email: string;
    type: UserType;
  };
}
