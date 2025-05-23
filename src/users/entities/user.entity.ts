import { UserType, User } from "generated/prisma";
import { ApiProperty } from '@nestjs/swagger';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type UserWithoutPassword = Omit<User, 'password'>;

export class UserEntity {
  @ApiProperty()
  id: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  telephone: string | null;

  @ApiProperty()
  firstname: string;

  @ApiProperty()
  lastname: string | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  type: UserType = 'USER';
}
