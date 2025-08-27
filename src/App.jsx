
import "./index.css";
import HomePage from "./HomePage";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import OrderPage from "./OrderPage";
import SuccessPage from "./SuccessPage";
import Header from "./Header";

function App() {


  return (
    <>
      <Header></Header>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/OrderPage" component={OrderPage} />
          <Route path="/SuccessPage" component={SuccessPage} />
        </Switch>
      </BrowserRouter>

    </>
  )
}

export default App
