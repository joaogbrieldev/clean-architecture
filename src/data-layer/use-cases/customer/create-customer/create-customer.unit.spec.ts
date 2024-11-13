import { CreateCustomerUseCase } from "./create-customer.use-case"

const customerCreated = {
  id: "any_id",
  name: 'any_name',
  address: {
    street: 'any',
    number: 1,
    city: 'any',
    zip: 'any',
  }
}

const input = {
  name: 'any_name',
  address: {
    street: 'any',
    number: 1,
    city: 'any',
    zip: 'any',
  }
}

const mockRepository = () => {
  return {
    find: jest.fn(),
    findAll: jest.fn(),
    create: jest.fn().mockReturnValue(customerCreated),
    update: jest.fn()
  }
}

describe("CustomerCreated UseCase", () => {
  test("should create customer", async ()=> {
    const repository = mockRepository()
    const usecase = new CreateCustomerUseCase(repository)
    const output = await usecase.execute(customerCreated);
    expect(output).toStrictEqual({
      id: expect.any(String),
      name: input.name,
      address: {
        street: input.address.street,
        number: input.address.number,
        zip: input.address.zip,
        city: input.address.city
      }
    })

  })

  test("should thrown a error", async ()=> {
    const repository = mockRepository()
    const usecase = new CreateCustomerUseCase(repository)
    input.name = ''
    await expect(usecase.execute(input)).rejects.toThrow("Name is required")

  })
})