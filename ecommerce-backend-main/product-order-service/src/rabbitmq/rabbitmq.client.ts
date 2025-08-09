// RabbitMQ connection config in NestJS
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

export const rabbitmqClient = ClientProxyFactory.create({
  transport: Transport.RMQ,
  options: {
    urls: ['amqp://admin:admin123@rabbitmq:5672'], // ✅ Updated credentials
    queue: 'main_queue',
    queueOptions: { durable: true },
  },
});
