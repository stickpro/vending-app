import "./App.css";
import { useState, useEffect } from "react"
import { loadProducts, createOrder} from './Api/Api.js'
import Card from "./Components/Card/Card";

const tg = window.Telegram.WebApp;
const user = tg.initDataUnsafe

function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    loadProducts().then((response) => setProducts(response))
  }, [])

  function onCheckout(product) {
    tg.MainButton.text = "Получить " + product.name;
    tg.MainButton.onClick(createOrder(product, user))
    tg.MainButton.show();
  };

  return (
    <div className="App">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            { products && products.map((product) => {
              return (<Card product={product} onCheckout={onCheckout} key={product.ID}/>)
            }) }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
