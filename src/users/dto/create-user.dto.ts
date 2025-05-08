import { ApiProperty } from "@nestjs/swagger";
import { UserType } from "generated/prisma";

export class CreateUserDto {
  @ApiProperty({ required: true  })
  email: string;

  @ApiProperty({ required: false })
  telephone?: string;

  @ApiProperty({ required: true })
  firstname: string;

  @ApiProperty({ required: false })
  lastname: string;

  @ApiProperty({ required: true })
  password: string;

  @ApiProperty({ required: false, default: 'USER' })
  role?: UserType = 'USER'

}
