import { ApiProperty } from '@nestjs/swagger';
import { UserType } from '@prisma/client';

export class CreateUserDto {
  @ApiProperty({ required: true })
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
  type?: UserType = 'USER';
}
