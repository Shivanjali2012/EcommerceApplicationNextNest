import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';


@Module({
  imports: [
   TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost', // 🔁 Use Docker service name
  port: 5434,
  username: 'admin',
  password: 'admin123',
  database: 'ecommerce_db',
  autoLoadEntities: true,
  synchronize: true,
}),
    ProductsModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
