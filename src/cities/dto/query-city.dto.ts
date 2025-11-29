import { IsString, IsOptional, IsNumber, IsBoolean, IsBooleanString } from 'class-validator';

export class CityQueryDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    country?: string;

    @IsOptional()
    @IsBooleanString()
    active?: string;
}
