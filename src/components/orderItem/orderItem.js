import React from "react";

const OrderItem = props => {
  return (
    <tbody>
      <tr>
        <td>{props.type}</td>
        <td>{props.qty}</td>
        <td>{props.price}</td>
        <td>{props.subtotal}</td>
      </tr>
    </tbody>
  );
};

export default OrderItem;
