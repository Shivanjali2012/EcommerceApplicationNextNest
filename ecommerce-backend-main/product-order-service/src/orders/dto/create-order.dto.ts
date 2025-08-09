import { IsEmail, IsNotEmpty, IsNumber, IsArray } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  phone: string;

  @IsArray()
  productIds: number[];

  @IsNumber()
  totalAmount: number;
}
