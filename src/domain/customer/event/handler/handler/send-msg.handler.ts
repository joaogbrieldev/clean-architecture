import IEventHandler from "../../../../@shared/events/event-handler.interface";
import { CreateCustomerEvent } from "../customer-created.event";


export class SendEmailWhenCustomerIsCreatedHandler implements IEventHandler<CreateCustomerEvent> {
  handle(event: CreateCustomerEvent): void {
    console.log("Esse é o primeiro console.log do evento: CustomerCreated") // @example: envite to rabbitmq
  }

}

export class SendConsoleLogWhenAddressIsChangedHandler implements IEventHandler<CreateCustomerEvent> {
  handle(event: CreateCustomerEvent): void {
    console.log("Esse é o segundo console.log do evento: CustomerCreated") // @example: envite to rabbitmq
  }
  
}