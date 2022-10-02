import { Publisher, Subjects, TicketCreatedEvent } from "@microsrvs/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
