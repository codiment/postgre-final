import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }

  async getUserByOrganizationId(organizationId: string): Promise<UserDto[]> {
    const users = await this.prisma.user.findMany({
      where: {
        memberships: {
          some: {
            organizationId,
          },
        },
      },
    });

    return users.map((user) => ({
      ...user,
      telephone: user.telephone || '', // Convert null to empty string
      password: user.password, // Add a missing password field
      id: user.id,
      email: user.email,
      firstName: user.firstname, // Map firstname to firstName
      lastName: user.lastname, // Map lastname to lastName
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      type: user.type,
    }));
  }
}
