import React, { Component } from "react";
import Jumbotron from "../Jumbotron/Jumbotron";
import EventList from "../eventlist/EventList";
import EventFilter from "../eventfilter/EventFilter";
import classes from "./home.css";
import Spinner from "../UI/Spinner/spinner";
import CategoryList from "../categoryList/categoryList";
import Footer from "../../containers/footer/footer";
import { EventContext } from "../../utils/context";

class HomePage extends Component {
  state = {};

  static contextType = EventContext;

  render() {
    const {
      category,
      events,
      jumbotrons,
      formData,
      loading,
      onBookmark,
      onUnbookmark,
      onDetailClicked,
      onFilterChanged,
      onFormSubmit,
      onCategoryClicked
    } = this.context;

    const homepage = loading ? (
      <Spinner />
    ) : (
      <div className={classes.homepage}>
        <div className={classes.jumbotron}>
          <Jumbotron image={jumbotrons[0].image} />
        </div>
        <div className={classes.filter}>
          <EventFilter
            data={formData}
            onChanged={onFilterChanged}
            onSubmitted={onFormSubmit}
          />
        </div>
        <div className={classes.events}>
          <h2 className={classes.title}>Events to explore</h2>
          <div className={classes.list}>
            <EventList
              events={events}
              bookmarked={onBookmark}
              unBookmarked={onUnbookmark}
              detailChecked={onDetailClicked}
            />
          </div>
        </div>
        <div className={classes.category}>
          <h2 className={classes.title}>Categories to explore</h2>
          <div className={classes.categorylist}>
            <CategoryList
              category={category}
              categoryClicked={onCategoryClicked}
            />
          </div>
        </div>
        <div className={classes.footer}>
          <Footer />
        </div>
      </div>
    );
    return homepage;
  }
}

export default HomePage;
