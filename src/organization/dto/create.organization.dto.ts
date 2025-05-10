import { ApiProperty } from "@nestjs/swagger";
import { MinLength } from "class-validator";

export class CreateOrganizationDto {
    @ApiProperty()
    @MinLength(1, {
        message: 'Name must be at least 1 character long',
    })
    name!: string;
}