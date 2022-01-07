import React from "react";
import { BrowserRouter } from "react-router-dom";
import RouterComponent from "./Router";
import Footer from "./Screens/Footer/Footer";
import Header from "./Screens/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RouterComponent />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
