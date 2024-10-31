import Customer from "../../../../domain/customer/entity/customer";
import CustomerRepository from "../../../../infra/customer/repository/sequelize/customer.repository";
import Address from "../../../../value-object/address";
import { IInputFindCustomerDto, IOutputFindCustomerDto } from "./find-customer.dto";
import { FindCustomerUseCase } from "./find-customer.use-case";

describe("Unit test", () => {
  test("should be find a customer with use case", async() => {
    const customerRepository = new CustomerRepository();
    const usecase = new FindCustomerUseCase(customerRepository)
    const customerCreate = new Customer('any','any')
    const address: Address = new Address(
      'any',
       1,
       'any',
       'any',
    )
    customerCreate.changeAddress(address)
    const customerCreated = await customerRepository.create(customerCreate);

    const input: IInputFindCustomerDto = {
      id: 'any'
    }

    const output: IOutputFindCustomerDto = {
      id: input.id,
      name: 'any',
      address: {
        street: 'any',
        number: 1,
        city: 'any',
        zip: 'any',
      }
    }

    const result = await usecase.execute(input) 
    expect(result).toStrictEqual(output)
  })
})
