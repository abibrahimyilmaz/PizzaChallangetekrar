
import "./index.css";
import HomePage from "./HomePage";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import OrderPage from "./OrderPage";
import SuccessPage from "./SuccessPage";
import Header from "./Header";
import NotFoundPage from "./NotFoundPage";

function App() {


  return (
    <>
      <Header></Header>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/OrderPage" exact component={OrderPage} />
          <Route path="/SuccessPage" exact component={SuccessPage} />
          <Route component={NotFoundPage} /> {/* Diğer tüm yollar 404 */}
        </Switch>

      </BrowserRouter>

    </>
  )
}

export default App
