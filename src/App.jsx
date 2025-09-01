
import "./index.css";
import HomePage from "./HomePage";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import OrderPage from "./OrderPage";
import SuccessPage from "./SuccessPage";
import Header from "./Header";
import NotFoundPage from "./NotFoundPage";
import { useState } from "react";
import Footer from "./Footer";

function App() {


  const [siparis, setSiparis] = useState(null)
  return (
    <>
      <Header></Header>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route

            path="/OrderPage" exact
            render={(props) => (
              <OrderPage {...props} setSiparis={setSiparis} />
            )} />
          <Route path="/SuccessPage" exact
            render={(props) => (
              <SuccessPage {...props} siparis={siparis} />
            )} />
          <Route component={NotFoundPage} /> {/* Diğer tüm yollar 404 */}
        </Switch>

      </BrowserRouter>
      <Footer />

    </>
  )
}

export default App
