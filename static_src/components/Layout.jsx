import React from "react";
import MessageField from "./MessageField";
import Header from "./Header";

export default function Layout() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <MessageField />
        </div>
      </div>
    </div>
  );
}
