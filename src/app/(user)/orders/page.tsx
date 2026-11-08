import Container from "@/components/Container";
import Orders from "@/components/Orders";
import Title from "@/components/Title";
import { validateSession } from "@/lib/manageSession";
import React from "react";

const OrdersPage = async () => {
  await validateSession();
  return (
    <Container className="py-10">
      <Title>Your Orders</Title>
      <Orders />
    </Container>
  );
};

export default OrdersPage;
