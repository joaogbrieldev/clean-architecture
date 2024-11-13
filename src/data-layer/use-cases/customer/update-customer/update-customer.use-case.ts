import Customer from "../../../../domain/customer/entity/customer";
import CustomerRepositoryInterface from "../../../../domain/customer/repository/customer-repository.interface";
import Address from "../../../../value-object/address";
import {
  IInputUpdateCustomerDto,
  IOutputUpdateCustomerDto,
} from "./update-customer.dto";

export default class UpdateCustomerUseCase {
  constructor(
    private readonly _customerRepository: CustomerRepositoryInterface
  ) {}
  async execute(
    input: IInputUpdateCustomerDto
  ): Promise<IOutputUpdateCustomerDto> {
    const customerFinded: Customer = await this._customerRepository.find(
      input.id
    );
    customerFinded.changeName(input.name);
    customerFinded.changeAddress(
      new Address(
        input.address.street,
        input.address.number,
        input.address.zip,
        input.address.city
      )
    );
    const customerUpdated = {
      id: customerFinded.id,
      name: customerFinded.name,
      address: {
        street: customerFinded.Address.street,
        number: customerFinded.Address.number,
        zip: customerFinded.Address.zip,
        city: customerFinded.Address.city,
      },
    };
    await this._customerRepository.update(customerFinded);
    return customerUpdated;
  }
}
