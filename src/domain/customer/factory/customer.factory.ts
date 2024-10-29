import { v4 as uuid } from "uuid";
import Customer from "../entity/customer";
import CustomerInterface from "../entity/customer.interface";

export default class CustomerFactory {
  public static create (name: string): CustomerInterface {
    return new Customer(uuid(), name)
  }
}