import { v4 as uuid } from "uuid";
import CustomerFactory from "../../../../domain/customer/factory/customer.factory";
import CustomerRepository from "../../../../infra/customer/repository/sequelize/customer.repository";
import Address from "../../../../value-object/address";
import { IInputCreateCustomerDto, IOutputCreateCustomerDto } from "./create-customer.dto";

export class CreateCustomerUseCase {
  constructor(private readonly _customerRepository: CustomerRepository){}
  async execute(input: IInputCreateCustomerDto): Promise<IOutputCreateCustomerDto>{

    const customerCreate = CustomerFactory.createWithAddress(input.name, new Address(input.address.city, input.address.number, input.address.street, input.address.zip));

    await this._customerRepository.create(customerCreate)

    return {
      id: uuid(),
      name: customerCreate.name,
      address: {
        street:  customerCreate.Address.street,
        number: customerCreate.Address.number,
        city: customerCreate.Address.city,
        zip: customerCreate.Address.zip
      },

    }
  }
}