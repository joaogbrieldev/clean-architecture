import e, { Request, Response } from "express";
import { CreateCustomerUseCase } from "../../../data-layer/use-cases/customer/create-customer/create-customer.use-case";
import CustomerRepository from "../../customer/repository/sequelize/customer.repository";

export const customerRoute = e.Router();

customerRoute.post("/", async (req: Request, res: Response) => {
  const usecase = new CreateCustomerUseCase(new CustomerRepository());
  try {
    const customerDto = {
      name: req.body.name,
      address: {
        street: req.body.address.street,
        city: req.body.address.city,
        number: req.body.address.number,
        zip: req.body.address.zip,
      },
    };
    const output = await usecase.execute(customerDto);
    res.status(201).send(output);
  } catch (error) {
    res.status(500).send(error);
  }
});
