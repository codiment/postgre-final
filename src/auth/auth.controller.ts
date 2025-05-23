import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @Public()
  login(@Body() data: LoginDto) {
    const userToken = this.authService.validateUser(data);
    if (!userToken)
      throw new HttpException('Invalid credentials', HttpStatus.NOT_FOUND);

    return userToken;
  }
}
