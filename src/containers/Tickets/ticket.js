import React from "react";
import TicketForm from "../../components/ticketForm/ticketForm";
import { EventConsumer } from "../../utils/context";

const Ticket = props => {
  return (
    <EventConsumer>
      {value => {
        const TicketArr = value.eventDetail.ticketinfo.tickets;

        return TicketArr.map(ticket => (
          <TicketForm
            key={ticket.type}
            ticketType={ticket.type}
            price={ticket.price}
            qty={ticket.qty}
            selected={event => {
              value.onTicketsSelected(event, ticket.type);
            }}
          />
        ));
      }}
    </EventConsumer>
  );
};

export default Ticket;
