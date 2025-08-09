import { ClientProxyFactory, Transport } from '@nestjs/microservices';

export const rabbitmqClient = ClientProxyFactory.create({
  transport: Transport.RMQ,
  options: {
    urls: ['amqp://admin:admin123@rabbitmq:5672'], // NOT guest:guest
    queue: 'main_queue',
    queueOptions: { durable: true },
  },
});