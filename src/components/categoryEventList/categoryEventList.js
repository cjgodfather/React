import React, { Component } from "react";
import Event from "../eventlist/Event";
import { EventContext } from "../../utils/context";
import Title from "../Title/title";

class CategoryEventList extends Component {
  state = {};

  static contextType = EventContext;

  render() {
    const {
      categoryEvents,
      onBookmark,
      onUnbookmark,
      onDetailClicked
    } = this.context;
    const categoryEventsList = categoryEvents.map(el => (
      <Event
        key={el.slug}
        name={el.name}
        date={el.date}
        image={el.image}
        location={el.location}
        category={el.category}
        description={el.description}
        slug={el.slug}
        bookmarked={el.bookmarked}
        onDetailClicked={() => onDetailClicked(el.slug)}
        onBookmarkClicked={() => onBookmark(el.slug)}
        onUnbookmarkClicked={() => onUnbookmark(el.slug)}
      />
    ));
    return (
      <div>
        <Title
          Type="h2"
          content={this.props.match.params.name + " to explore"}
        />
        {categoryEventsList}
      </div>
    );
  }
}

export default CategoryEventList;
