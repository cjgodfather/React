import React from "react";
import OrderItem from "../orderItem/orderItem";

const OrderSummary = props => {
  return (
    <table>
      <tr>
        <th>Ticket Type</th>
        <th>Quantities</th>
        <th>Price</th>
        <th>Subtotal</th>
      </tr>
      {props.orderItems.map(item => {
        if (item.qty) {
          return (
            <OrderItem
              type={item.type}
              price={item.price}
              qty={item.qty}
              subtotal={item.subtotal}
            />
          );
        }
      })}
    </table>
  );
};

export default OrderSummary;
