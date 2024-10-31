import CustomerRepositoryInterface from "../../../../domain/customer/repository/customer-repository.interface";
import { IInputFindCustomerDto, IOutputFindCustomerDto } from "./find-customer.dto";

export class FindCustomerUseCase {
  constructor(private readonly _customerRepository : CustomerRepositoryInterface){}
  async execute(input: IInputFindCustomerDto): Promise<IOutputFindCustomerDto>{
    const customer = await this._customerRepository.find(input.id)
    const output: IOutputFindCustomerDto = {
      id: customer.id,
      name: customer.name,
      address: {
        street: customer.Address.street,
        city: customer.Address.city,
        number: customer.Address.number,
        zip: customer.Address.zip,
      }
    }
  return output;
  }
}