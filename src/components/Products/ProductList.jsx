import React, { Component } from 'react'
import Product from './Product'
import 'materialize-css';
import { Row } from 'react-materialize';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    }
  }


  componentDidMount() {
    this.fetchGOT();
  }

  fetchGOT = () => {
    fetch("https://api.harvardartmuseums.org/image?apikey=410b50e0-e68f-4932-a006-ce27bc423403&size=6&page=1")
      .then(image => {
        return image.json();
      })
      .then(item => {
        this.setState({
          products: [...item.records]
        })
      })
      .catch(error => console.log('Se produjo un error: ', error))
  }

  render() {
    const { products } = this.state;
    return (
      <Row>
        {products.length > 0 ? products.map((product, i) => {
          return (
            <Product index={i} product={product} data={this.props} />
          )
        }) : 'loading...'}

      </Row>
    );
  }
}

export default ProductList;