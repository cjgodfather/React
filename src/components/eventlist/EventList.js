import React from "react";
import Event from "../eventlist/Event";
import classes from "../eventlist/EventList.css";

const EventList = ({ events, bookmarked, detailChecked, unBookmarked }) => {
  return events.map(el => (
    <Event
      className={classes.eventlist}
      key={el.slug}
      name={el.name}
      date={el.date}
      image={el.eventImage}
      location={el.location}
      category={el.category}
      description={el.description}
      slug={el.slug}
      bookmarked={el.bookmarked}
      onDetailClicked={() => detailChecked(el.slug)}
      onBookmarkClicked={() => bookmarked(el.slug)}
      onUnbookmarkClicked={() => unBookmarked(el.slug)}
    />
  ));
};

export default EventList;
