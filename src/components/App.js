import React from "react";
import Header from "./Header";
import Quote from "./Quote";
import Footer from "./Footer";
import appInfo from "../data/appInfo";

function App() {
  return (
    <div className="App">
      <Header title={appInfo.title} />
      <Quote />
      <Footer author={appInfo.author} />
    </div>
  );
}

export default App;
