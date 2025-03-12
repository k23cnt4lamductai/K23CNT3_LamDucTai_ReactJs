import React, { useState } from "react";
import LdtProductList from "./components/LdtProductList";
import LdtProductAdd from "./components/LdtProductAdd";

const App = () => {
  const [products, setProducts] = useState([
    { pid: 1, pName: "Mì Tôm", pQuantity: 2, pPrice: 100000 },
    { pid: 2, pName: "Xúc Xích", pQuantity: 4, pPrice: 150000 },
    { pid: 3, pName: "Dầu Ăn", pQuantity: 6, pPrice: 200000 },
  ]);

  const [nextId, setNextId] = useState(products.length ? products[products.length - 1].pid + 1 : 1);

  const addProduct = (newProduct) => {
    const productWithId = { ...newProduct, pid: nextId };
    setProducts([...products, productWithId]);
    setNextId(nextId + 1); // Tăng ID lên 1
  };

  return (
    <div className="container">
      <h1>Quản lý sản phẩm</h1>
      <LdtProductAdd addProduct={addProduct} />
      <LdtProductList products={products} />
    </div>
  );
};

export default App;