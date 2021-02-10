import React, { useState, FC } from 'react'
import { Navbar } from 'react-materialize';
import Cart from '../Cart/Cart'
import ProductList from '../Products/ProductList'

export interface pList {
  id: number;
  baseimageurl: string;
  date: string;
  height: string;
  width: string;
}

const Home: FC = () => {



  const [itemList, setItemList] = useState<pList[]>([]);

  const handleAddition = (item: pList): void => {
    setItemList([...itemList, item]);
  }

  const handleRemove = (item: pList): void => {
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