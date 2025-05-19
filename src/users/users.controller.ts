import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { ApiCreatedResponse, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AuthenticatedRequest } from '../interfaces/authenticated-user.inferface';
import { OrganizationRoleGuard } from 'src/auth/guards/organization-manager.guard';
import { OrganizationMemberRole } from 'generated/prisma'
import { AdminGuard } from 'src/auth/guards/admin.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  @ApiCreatedResponse({ type: UserEntity })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  @Get()
  @ApiCreatedResponse({ type: UserEntity, isArray: true })
  @UseGuards(JwtAuthGuard)
  findAll(@Req() req: AuthenticatedRequest) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    req.user;
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: UserEntity })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @UseGuards(AdminGuard)
  @Patch(':id')
  @ApiCreatedResponse({ type: UserEntity })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @UseGuards(AdminGuard)
  @Delete(':id')
  @ApiCreatedResponse({ type: UserEntity })
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  @UseGuards(OrganizationRoleGuard)
  @Roles(OrganizationMemberRole.MANAGER)
  @Get('organization/:organizationId')
  @ApiResponse({ status: 200, type: [UserDto] })
  async getUsersByOrganizationId(
    @Param('organizationId') organizationId: string,
  ) {
    return this.usersService.getUserByOrganizationId(organizationId);
  }

}
