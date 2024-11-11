import { Sequelize } from "sequelize-typescript";
import CustomerModel from "../../../../infra/customer/repository/sequelize/customer.model";
import CustomerRepository from "../../../../infra/customer/repository/sequelize/customer.repository";
import { IOutputFindCustomerDto } from "../find-customer/find-customer.dto";
import { CreateCustomerUseCase } from "./create-customer.use-case";

describe("Should be create a customer" , () => {
  let sequelize: Sequelize;
  
  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    sequelize.addModels([CustomerModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });
  test("usecase to create customer", async () => {
    const repository = new CustomerRepository()
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
    const usecase = new CreateCustomerUseCase(repository)
    const response = await usecase.execute(customerCreated)
    const output: IOutputFindCustomerDto = {
      id: "any_id",
      name: 'any_name',
      address: {
        street: 'any',
        number: 1,
        city: 'any',
        zip: 'any',
      }
    }
    expect(response).toStrictEqual(output)
  })
})