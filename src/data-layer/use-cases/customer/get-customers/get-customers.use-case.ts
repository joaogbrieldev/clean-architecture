import CustomerRepositoryInterface from "../../../../domain/customer/repository/customer-repository.interface";
import { IGetCustomersOutput } from "./get-customers.dto";

export default class GetAllCustomersUseCase {
  constructor(
    private readonly _customerRepository: CustomerRepositoryInterface
  ) {}
  async execute(): Promise<IGetCustomersOutput> {
    const customers = await this._customerRepository.findAll();
    return customers;
  }
}
