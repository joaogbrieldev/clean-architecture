import Address from "../../../../value-object/address"
import EventDispatcher from "../../../@shared/events/event-dispacher"
import Customer from "../../entity/customer"
import { SendConsoleLogWhenAddressIsChangedHandler, SendEmailWhenCustomerIsCreatedHandler } from "./handler/send-msg.handler"

describe("create customer tests", () => {

  test('should register an event handler', () => {
    const eventDispacher = new EventDispatcher()
    const eventHandler = new SendEmailWhenCustomerIsCreatedHandler()
    eventDispacher.register('CustomerCreated',eventHandler)
    eventDispacher.getEventHandlers["CustomerCreated"]
    expect( eventDispacher.getEventHandlers["CustomerCreated"].length).toBe(1)
  })
  test('should register an event handler', () => {
    const eventDispacher = new EventDispatcher()
    const customer = new Customer('any_id', 'any_name')
    const newAddress = new Address(
      "any",
      1,
      "any",
      "any",
    )
    customer.changeAddress(newAddress)
    const eventHandler = new SendConsoleLogWhenAddressIsChangedHandler()
    eventDispacher.register('AdressChanged',eventHandler)
    eventDispacher.getEventHandlers["AdressChanged"]
    expect( eventDispacher.getEventHandlers["AdressChanged"].length).toBe(1)
  })
})