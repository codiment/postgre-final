import { UserType } from "@prisma/client";

export interface AutheticatedRequest extends Request {
  user: {
    userId: string;
    email: string;
    type: UserType;
  };
}
