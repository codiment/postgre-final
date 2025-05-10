import { ApiProperty } from "@nestjs/swagger";

export class OrganizationDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    createdAt: string;

}