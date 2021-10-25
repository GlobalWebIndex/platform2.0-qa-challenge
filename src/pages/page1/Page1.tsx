import React, { useState } from "react";
import "./Page1.css";
import Header from "../../components/header/Header";
import List from "../../components/list/List";

const Page1: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}></Header>
      <List searchTerm={searchTerm}></List>
    </div>
  );
};

export default Page1;
