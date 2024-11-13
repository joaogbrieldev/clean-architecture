import Customer from "../../../../domain/customer/entity/customer";
import Address from "../../../../value-object/address";
import { IGetCustomersOutput } from "./get-customers.dto";
import GetAllCustomersUseCase from "./get-customers.use-case";
const address: Address = new Address("any", 1, "any", "any");
const customerCreated = new Customer("1", "joao");
customerCreated.changeAddress(address);

const mockRepository = () => {
  return {
    find: jest.fn(),
    findAll: jest.fn().mockReturnValue([customerCreated]),
    create: jest.fn(),
    update: jest.fn(),
  };
};

describe("Unit test", () => {
  test("should be find All customers with use case", async () => {
    const customerRepository = mockRepository();
    const usecase = new GetAllCustomersUseCase(customerRepository);

    const output: IGetCustomersOutput = [customerCreated];

    const result = await usecase.execute();
    expect(result).toStrictEqual(output);
  });
});
