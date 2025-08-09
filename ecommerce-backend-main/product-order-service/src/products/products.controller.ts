import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.productsService.findOne(id);
  }

  @Post()
  create(@Body() data) {
    return this.productsService.create(data);
  }

  @Post('bulk')
createMany(@Body() products: Partial<Product>[]) {
  return this.productsService.createMany(products);
}



  @Put(':id')
  update(@Param('id') id: number, @Body() data) {
    return this.productsService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.productsService.delete(id);
  }
}