import React, { Component } from "react";
import { eventList, jumbotrons, formData, categoryList } from "../data";

const EventContext = React.createContext();

class EventProvider extends Component {
  state = {
    events: [],
    recommendedEvents: [],
    eventDetail: "",
    eBookmarked: [],
    jumbotrons: [],
    loading: true,
    showTickets: false,
    formData: [],
    category: [],
    categoryEvents: [],
    checkoutDisabled: true
  };

  checkEventDetail = slug => {
    let tempDetail = { ...this.state.eventDetail };
    const matchEvent = this.state.events.find(el => el.slug === slug);
    tempDetail = matchEvent;
    this.setState(() => {
      return { eventDetail: tempDetail };
    });
  };

  showEventTickets = () => {
    this.setState({ showTickets: true });
  };

  closeEventTickets = () => {
    this.setState({ showTickets: false });
  };

  bookmarkHandler = slug => {
    let tempBookmarked = [...this.state.eBookmarked];
    const matchEvent = this.state.events.find(el => el.slug === slug);
    matchEvent.bookmarked = true;
    tempBookmarked = [...tempBookmarked, matchEvent];
    this.setState(() => {
      return { eBookmarked: tempBookmarked };
    });
  };

  unbookmarkHandler = slug => {
    let tempBookmarked = [...this.state.eBookmarked];
    const eventUnmarked = tempBookmarked.find(el => el.slug === slug);
    eventUnmarked.bookmarked = false;
    tempBookmarked = tempBookmarked.filter(el => el.slug !== slug);
    console.log(tempBookmarked, eventUnmarked);
    this.setState(() => {
      return { eBookmarked: tempBookmarked };
    });
  };

  checkoutHandler = () => {
    console.log(this.state.eventDetail);
  };

  ticketSelectHandler = (event, type) => {
    let tempEvent = { ...this.state.eventDetail };
    let tempTicketInfo = { ...tempEvent.ticketinfo };
    let tempTickets = [...tempTicketInfo.tickets];
    let singleTicketIndex = tempTickets.findIndex(
      ticket => ticket.type === type
    );
    tempTickets[singleTicketIndex].qty = event.target.value;
    tempTickets[singleTicketIndex].subtotal =
      tempTickets[singleTicketIndex].qty * tempTickets[singleTicketIndex].price;
    let tempTicketsQtyArr = tempTickets.map(el => parseInt(el.qty));
    let tempTicketsPriceArr = tempTickets.map(el => el.price);
    let totalQty = tempTicketsQtyArr.reduce((acc, cur) => acc + cur);
    let totalPrice = this.calTotalTicketPrice(
      tempTicketsQtyArr,
      tempTicketsPriceArr
    );
    if (totalPrice !== 0) {
      this.setState(() => {
        return { checkoutDisabled: false };
      });
    } else {
      this.setState(() => {
        return { checkoutDisabled: true };
      });
    }
    tempTicketInfo.qty = totalQty;
    tempTicketInfo.total = totalPrice;
    tempEvent.ticketinfo = tempTicketInfo;
    this.setState(() => {
      return { eventDetail: tempEvent };
    });
  };

  calTotalTicketPrice = (qtyArr, priceArr) => {
    let sum = 0;
    for (let i = 0; i < qtyArr.length; i++) {
      sum += qtyArr[i] * priceArr[i];
    }
    return sum;
  };

  getItems = items => {
    let tempItems = [];
    for (let i = 0; i < items.length; i++) {
      tempItems.push(items[i]);
    }
    return tempItems;
  };

  getData = () => {
    const tempEventList = this.getItems(eventList);
    const tempJumbotrons = this.getItems(jumbotrons);
    const tempFormData = this.getItems(formData);
    const tempCategory = this.getItems(categoryList);

    this.setState(() => {
      return {
        events: tempEventList,
        categoryEvents: tempEventList,
        jumbotrons: tempJumbotrons,
        loading: false,
        formData: tempFormData,
        category: tempCategory,
        recommendedEvents: tempEventList.slice(0, 4)
      };
    });
  };

  categoryClickHandler = title => {
    const tempEvents = [...this.state.events];
    const tempCategoryEvents = tempEvents.filter(el => el.category === title);
    this.setState({ categoryEvents: tempCategoryEvents });
  };

  filterChangeHandler = (event, inputName) => {
    let tempFormData = [...this.state.formData];
    let targetInputIndex = tempFormData.findIndex(el => el.label === inputName);
    let tempTargetInput = { ...tempFormData[targetInputIndex] };
    tempTargetInput.value = event.target.value;
    tempFormData[targetInputIndex] = tempTargetInput;
    console.log(event.target.value);
    this.setState({ formData: tempFormData });
  };

  formSubmitHandler = event => {
    event.preventDefault();
    const eventSearched = this.getUserInput(this.state.formData, "Looking for");
    const locationSearched = this.getUserInput(this.state.formData, "In");
    const dateSearched = this.getUserInput(this.state.formData, "On");
    const eventsMatched = this.filterEvents(
      this.state.events,
      eventSearched,
      locationSearched,
      dateSearched
    );
    this.setState({ events: eventsMatched });
  };

  getUserInput = (arr, name) => {
    const inputItem = arr.find(el => el.label === name);
    const { value } = inputItem;
    return value;
  };

  filterEvents = (events, name, location, date) => {
    let result;
    if (!name && !location && !date) {
      alert("provide input");
    } else if (name && !location && !date) {
      result = events.filter(event => event.name.includes(name));
    } else if (!name && location && !date) {
      result = events.filter(event => event.location === location);
    } else if (!name && !location && date) {
      result = events.filter(event => event.date === date);
    }
    return result;
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <EventContext.Provider
        value={{
          ...this.state,
          onDetailClicked: this.checkEventDetail,
          onBookmark: this.bookmarkHandler,
          onUnbookmark: this.unbookmarkHandler,
          onFilterChanged: this.filterChangeHandler,
          onFormSubmit: this.formSubmitHandler,
          onTicketsClicked: this.showEventTickets,
          onTicketsClosed: this.closeEventTickets,
          onTicketsSelected: this.ticketSelectHandler,
          onCheckoutClicked: this.checkoutHandler,
          onCategoryClicked: this.categoryClickHandler
        }}
      >
        {this.props.children}
      </EventContext.Provider>
    );
  }
}

const EventConsumer = EventContext.Consumer;

export { EventProvider, EventConsumer, EventContext };
