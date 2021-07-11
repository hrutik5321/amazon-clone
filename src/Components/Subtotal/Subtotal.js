import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
// import { SportsBasketball } from "@material-ui/icons";
import { useStateValue } from "../Context/StateProvider";
import { getBasketTotal } from "../Context/reducer";

function Subtotal() {
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):{" "}
              <strong>{`$ ${getBasketTotal(basket)}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" className="checkbox" /> This order contains
              a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
