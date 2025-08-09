import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientProxy } from '@nestjs/microservices';
import { Repository } from 'typeorm';
import { Order } from './order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,

    @Inject('CUSTOMER_SERVICE') // ✅ Inject microservice client
    private readonly customerClient: ClientProxy,
  ) {}

  async create(orderData: {
    name: string;
    email: string;
    phone: string;
    productIds: number[];
    totalAmount: number;
  }) {
    // ✅ Request customer details from Customer Service
    const customerResponse = await this.customerClient
      .send('resolve_customer', {
        name: orderData.name,
        email: orderData.email,
        phone: orderData.phone,
      })
      .toPromise();

    const { customerId, name, phone } = customerResponse;

    // ✅ Save full order including customer info
    const newOrder = this.orderRepository.create({
      customerId,
      productIds: orderData.productIds,
      totalAmount: orderData.totalAmount,
      customerName: name,
      customerPhone: phone,
    });

    return await this.orderRepository.save(newOrder);
  }

  async findAll() {
    return await this.orderRepository.find();
  }
}
