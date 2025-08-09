import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Post()
  create(@Body() orderData) {
    return this.ordersService.create(orderData);
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.ordersService.findAll(); // you may implement findOne in service if needed
  }
}