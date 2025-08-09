import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column('json', { nullable: true })
  orders: any[];
}
