import { Body, Controller, Post } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create.organization.dto';
import { OrganizationService } from './organization.service';
import { ApiResponse } from '@nestjs/swagger';
import { OrganizationDto } from './dto/organization.dto';

@Controller('organization')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) { }

  @Post()
  @ApiResponse({ status: 201, type: OrganizationDto })
  async create(@Body() CreateOrganizationDto: CreateOrganizationDto) {
    return this.organizationService.create(CreateOrganizationDto);
  }
}
