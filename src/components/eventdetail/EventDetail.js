import React, { Component } from "react";
import Button from "../UI/button/button";
import Modal from "../UI/Modal/modal";
import Ticket from "../../containers/Tickets/ticket";
import classes from "./EventDetail.css";
import EventList from "../eventlist/EventList";
import { Link } from "react-router-dom";
import { EventContext } from "../../utils/context";

class EventDetail extends Component {
  state = {};

  static contextType = EventContext;

  render() {
    const {
      recommendedEvents,
      onBookmark,
      onUnbookmark,
      onDetailClicked,
      eventDetail,
      showTickets,
      checkoutDisabled,
      onTicketsClicked,
      onTicketsClosed
    } = this.context;
    console.log(eventDetail);
    const tickets = showTickets ? (
      <Modal clicked={onTicketsClosed}>
        <h3>Select Tickets</h3>
        <Ticket />
        <hr />
        <div>
          QTY:<span>{eventDetail.ticketinfo.qty}</span>
        </div>
        <div>
          TOTAL:<span>${eventDetail.ticketinfo.total}</span>
        </div>
        <Link to={`/event/${eventDetail.slug}/checkout`}>
          <Button BtnType="success" disabled={checkoutDisabled}>
            Checkout
          </Button>
        </Link>
        <Button BtnType="danger" clicked={onTicketsClosed}>
          Cancel
        </Button>
      </Modal>
    ) : null;
    return (
      <div>
        <div className={classes.detail}>
          <h1>{eventDetail.name}</h1>
          <div className={classes.image}>
            <img src={eventDetail.eventImage} alt="event_picture" />
          </div>
          <h2>DATE and TIME</h2>
          <p>{eventDetail.date}</p>
          <h2>LOCATION</h2>
          <p>{eventDetail.location}</p>
          <h2>DESCRIPTION</h2>
          <p>{eventDetail.description}</p>
          <Button BtnType="success" clicked={onTicketsClicked}>
            Tickets
          </Button>
          {tickets}
        </div>
        <div className={classes.recommendation}>
          <h2>Events You May Like</h2>
          <div className={classes.recommendationList}>
            <EventList
              events={recommendedEvents}
              bookmarked={onBookmark}
              unBookmarked={onUnbookmark}
              detailChecked={onDetailClicked}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default EventDetail;
