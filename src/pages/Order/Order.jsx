import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import orderCoverImg from "../../assets/shop/banner2.jpg";
import Cover from "../Shared/Cover/Cover";
import { useState } from "react";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";

import OrderTabs from "./OrderTabs";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  <Helmet>
    <title>Bistro boss | Order Food</title>
  </Helmet>;
  const categories = ["Salad", "Pizza", "Soup", "Dessert", "Drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Cover img={orderCoverImg} title="Order Food"></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>

          <Tab></Tab>
        </TabList>
        <TabPanel>
          <OrderTabs items={salad}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs items={pizza}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs items={soup}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs items={dessert}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs items={drinks}></OrderTabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
