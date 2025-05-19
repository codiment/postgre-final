import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserType } from 'generated/prisma';
import { UsersService } from '../../users/users.service';
import { LoggedInUserData } from '../../interfaces/authenticated-user.inferface';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private readonly usersService: UsersService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const request = context.switchToHttp().getRequest();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const user = request.user as LoggedInUserData;

    if (!user) {
      throw new UnauthorizedException('Usuario no autenticado');
    }

    const foundUser = await this.usersService.findOne(user.id);

    if (user.type !== UserType.ADMIN || foundUser?.type !== UserType.ADMIN) {
      throw new ForbiddenException('Acceso denegado: solo administradores');
    }

    return true;
  }
}
