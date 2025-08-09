import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerId: number;

  @Column('json')
  productIds: number[];

  @Column('decimal', { precision: 10, scale: 2 })
  totalAmount: number;

  
  @Column({ nullable: true }) // ✅ optional
  customerName: string;

  @Column({ nullable: true }) // ✅ optional
  customerPhone: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ default: 'pending' })
  status: string;
}
