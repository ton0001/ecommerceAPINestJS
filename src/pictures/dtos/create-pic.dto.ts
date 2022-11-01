import {IsNumber, IsString} from 'class-validator'

export class CreatePictureDto{
    @IsString()
    url: string

    @IsNumber()
    product: number;
}