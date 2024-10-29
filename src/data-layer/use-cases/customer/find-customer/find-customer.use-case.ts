import { IInputFindCustomerDto, IOutputFindCustomerDto } from "./find-customer.dto";

export class FindCustomerUseCase {
  execute(input: IInputFindCustomerDto): IOutputFindCustomerDto{
    return  {
      id: input.id,
      name: 'any',
      address: {
        street: 'any',
        city: 'any',
        number: 1,
        zip: 'any',
    }
    }
  }
}