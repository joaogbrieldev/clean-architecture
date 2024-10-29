import { IInputFindCustomerDto, IOutputFindCustomerDto } from "./find-customer.dto"
import { FindCustomerUseCase } from "./find-customer.use-case"

test("should be find a customer with use case", () => {
  const usecase = new FindCustomerUseCase()
  const input: IInputFindCustomerDto = {id: 'any_id'}
  const output: IOutputFindCustomerDto = {
    id: input.id,
    name: 'any',
    address: {
      street: 'any',
      city: 'any',
      number: 1,
      zip: 'any',
  }
  }
  const customer = usecase.execute(input) 
  expect(customer).toStrictEqual(output)
  expect(customer.id).toStrictEqual(input.id);
})