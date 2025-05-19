import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsEmail,
  IsString,
  IsUUID,
  Length,
  MinLength,
} from 'class-validator';

export class UserDto {
  @ApiProperty({ example: 'e2999283-96bf-4504-b751-f66bb7b9456b' })
  @IsUUID()
  id: string;

  @ApiProperty({ example: 'john.doe@email.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '1234567890' })
  @IsString()
  @Length(9, 15)
  telephone: string;

  @ApiProperty({ example: 'John' })
  @IsString()
  @MinLength(2)
  firstName: string;

  @ApiProperty({ example: 'Doe' })
  @IsString()
  @MinLength(2)
  lastName: string;

  @ApiProperty({ example: '2025-05-17T21:07:33.320Z' })
  @IsDate()
  createdAt: Date;

  @ApiProperty({ example: '2025-05-17T21:07:33.320Z' })
  @IsDate()
  updatedAt: Date;

  @ApiProperty({ example: 'qwerty' })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({ example: 'USER' })
  @IsString()
  type: string;
}
