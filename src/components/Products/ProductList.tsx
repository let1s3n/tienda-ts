import React, { Component, useState, useEffect } from 'react'
import Product from './Product'
import 'materialize-css';
import { Row } from 'react-materialize';

const ProductList = (props:any) => {

  const [products, setProducts] = useState([{}]);
  useEffect(() => {
    fetchGOT();
  }, []);


  const fetchGOT = () => {
    fetch("https://api.harvardartmuseums.org/image?apikey=410b50e0-e68f-4932-a006-ce27bc423403&size=6&page=1")
      .then(image => {
        return image.json();
      })
      .then(item => {
        /* this.setState({
          products: [...item.records]
        }) */

        setProducts([...item.records]);
      })
      .catch(error => console.log('Se produjo un error: ', error))
  }

  
    
    return (
      <Row>
        {products.length > 0 ? products.map((product, i) => {
          return (
            <Product index={i} product={product} data={props} />
          )
        }) : 'loading...'}

      </Row>
    );
  
}

export default ProductList;