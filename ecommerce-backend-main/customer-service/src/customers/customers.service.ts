import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepo: Repository<Customer>,
  ) {}

  async findByEmail(email: string): Promise<Customer | null> {
    return await this.customerRepo.findOneBy({ email });
  }

  async create(data: { name: string; email: string; phone: string }): Promise<Customer> {
    const customer = this.customerRepo.create(data);
    return await this.customerRepo.save(customer);
  }

  async findOrCreate(data: { name: string; email: string; phone: string }): Promise<Customer> {
    let customer = await this.findByEmail(data.email);
    if (!customer) {
      customer = await this.create(data);
    }
    return customer;
  }
}
