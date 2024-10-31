import Customer from "../../../../domain/customer/entity/customer";
import Address from "../../../../value-object/address";
import { IInputFindCustomerDto, IOutputFindCustomerDto } from "./find-customer.dto";
import { FindCustomerUseCase } from "./find-customer.use-case";

const customerCreate = new Customer('any','any')
const address: Address = new Address(
  'any',
  1,
  'any',
  'any',
    )
customerCreate.changeAddress(address)

const mockRepository = () => {
  return {
    find: jest.fn().mockReturnValue(customerCreate),
    findAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn()
  }
}

describe("Unit test", () => {
  test("should be find a customer with use case", async() => {
    const customerRepository = mockRepository();
    const usecase = new FindCustomerUseCase(customerRepository)

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
