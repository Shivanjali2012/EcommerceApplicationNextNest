import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CustomersService } from './customers.service';

@Controller()
// export class CustomersController {
//   constructor(private readonly customersService: CustomersService) {}
 
//   @MessagePattern('resolve_customer')
//   async resolveCustomer(@Payload() payload: { name: string; email: string; phone: string }) {
//     const { name, email, phone } = payload;
 
//     let customer = await this.customersService.findByEmail(email);
 
//     if (!customer) {
//       customer = await this.customersService.create({ name, email, phone });
//     }

//     return { customerId: customer.id,
//   name: customer.name,
//   phone: customer.phone, };
//   }
// }

export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @MessagePattern('resolve_customer')
  async resolveCustomer(
    @Payload()
    payload: { name: string; email: string; phone: string },
  ) {
    const { name, email, phone } = payload;

    let customer = await this.customersService.findByEmail(email);

    if (!customer) {
      customer = await this.customersService.create({ name, email, phone });
    }

    return {
      customerId: customer.id,
      name: customer.name,
      phone: customer.phone,
    };
  }
}
