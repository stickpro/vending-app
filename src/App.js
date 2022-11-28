import "./App.css";
import { useState, useEffect } from "react"
import { loadProducts } from './Api/Api.js'
import Card from "./Components/Card/Card";

function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    loadProducts().then((response) => setProducts(response))
  }, [])

  return (
    <div className="App">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            { products && products.map((product) => {
              return (<Card product={product} key={product.ID}/>)
            }) }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
