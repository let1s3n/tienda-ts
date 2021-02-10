import React, { useState, FC } from 'react'
import { Navbar } from 'react-materialize';
import Cart from '../Cart/Cart'
import ProductList from '../Products/ProductList'

export interface asd {
  id: number;
}

const Home: FC = () => {

  

  const [itemList, setItemList] = useState<asd[]>([]);

  const handleAddition = (item: asd) => {
    setItemList([...itemList, item]);
  }

  const handleRemove = (item: asd) => {
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