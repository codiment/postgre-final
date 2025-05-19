import { Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create.organization.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrganizationDto } from './dto/organization.dto';

@Injectable()
export class OrganizationService {
  constructor(private prisma: PrismaService) {}

  async create(
    CreateOrganizationDto: CreateOrganizationDto,
  ): Promise<OrganizationDto> {
    const organization = await this.prisma.organization.create({
      data: CreateOrganizationDto,
    });

    return {
      id: organization.id,
      name: organization.name,
      createdAt: organization.createdAt.toDateString(),
    };
  }
}
