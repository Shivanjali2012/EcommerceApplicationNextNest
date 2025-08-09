import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async findOne(id: number): Promise<Product> {
    return this.productRepository.findOneBy({ id });
  }

  async create(productData: Partial<Product>): Promise<Product> {
    const product = this.productRepository.create(productData);
    return this.productRepository.save(product);
  }

  async createMany(products: Partial<Product>[]): Promise<Product[]> {
  const created = this.productRepository.create(products);
  return this.productRepository.save(created);
}


  async update(id: number, updateData: Partial<Product>): Promise<Product> {
    await this.productRepository.update(id, updateData);
    return this.productRepository.findOneBy({ id });
  }

  async delete(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}
