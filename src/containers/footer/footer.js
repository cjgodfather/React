import React, { Component } from "react";
import FooterList from "../../components/footerlist/footerList";

class Footer extends Component {
  state = {
    footer: [
      {
        title: "User EventAwesome",
        content: ["how it works", "Pricing", "Blog"]
      },
      {
        title: "Plan Events",
        content: [
          "Online Registration",
          "Sell Event Tickets",
          "Event Management"
        ]
      },
      {
        title: "Find Events",
        content: [
          "Find Events in New York",
          "Find Events in Los Angeles",
          "Find Events in DC"
        ]
      },
      {
        title: "Contact Us",
        content: ["Twitter", "Linkedin", "Facebook"]
      }
    ]
  };
  render() {
    const footerList = this.state.footer.map(el => (
      <FooterList title={el.title} content={el.content} />
    ));
    return <div>{footerList}</div>;
  }
}

export default Footer;
