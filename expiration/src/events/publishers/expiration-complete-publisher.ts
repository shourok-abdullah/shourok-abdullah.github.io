import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@microsrvs/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
