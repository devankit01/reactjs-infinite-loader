import "./App.css";
import { Switch, Route, Link } from "react-router-dom";

import Cart from "./components/Cart";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className="App">
      <div className="header__section">
        <h1 style={{textAlign: 'center'}}>SoftSensor Shop</h1>
        <div>
          <p style={{textAlign: 'center'}}>
            <Link to="/">Home</Link>
          </p>

          

          {/* Switch  */}
          <Switch>
            <Route exact path="/" component={ProductCard} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
