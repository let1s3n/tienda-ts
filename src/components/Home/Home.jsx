import React, { useState } from 'react'
import { Navbar } from 'react-materialize';
import Cart from '../Cart/Cart'
import ProductList from '../Products/ProductList'

const Home = () => {

  const [itemList, setItemList] = useState([]);

  const handleAddition = (item) => {
    setItemList([...itemList, item]);
  }

  const handleRemove = (item) => {
    const newItemList = itemList.filter(product => product.id !== item.id);
    setItemList(newItemList);
  }

  const handleVaciar = () => {
    setItemList([]);
  }

  return (
    <div>
      <Navbar
        alignLinks="right"
        brand={<a className="brand-logo" href="#!">Tienda</a>}
      >
        <Cart productsOnCart={itemList} handleRemove={handleRemove} handleVaciar={handleVaciar} />
      </Navbar>
      <ProductList handleAddition={handleAddition} handleRemove={handleRemove} productsOnCart={itemList} />
    </div>
  );

}

export default Home;