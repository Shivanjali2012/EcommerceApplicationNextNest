import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
  host: 'localhost', // 👈
  port: 5434,
  username: 'admin',
  password: 'admin123',
  database: 'customers_db', // this must exist
  autoLoadEntities: true,
  synchronize: true,
    }),
    CustomersModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
