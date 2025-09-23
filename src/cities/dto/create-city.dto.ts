import { IsString, IsOptional, IsNumber, IsBoolean } from 'class-validator';

export class CreateCityDto {
    @IsString()
    name : string;

    @IsString()
    @IsOptional()
    decription?: string;

    @IsOptional()
    @IsBoolean()
    active? : boolean;
}
