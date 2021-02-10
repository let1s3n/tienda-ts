import React from 'react'
import { IoIosClose } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import { Dropdown, Button } from 'react-materialize'
import { pList } from '../Home/Home'

type Props = {
  handleRemove: (a: pList) => void;
  handleVaciar: () => void;
  productsOnCart: pList[]

}

const Cart = ({ handleRemove, handleVaciar, productsOnCart }: Props) => {

  const handleClickRemover = (product: pList) => {
    handleRemove(product);
  }

  const vaciar = () => {
    handleVaciar();
  }

  let total = 0;

  return (
    <Dropdown
      id="dropdown1"
      trigger={<Button className="multiline counter-cart" href="#">{productsOnCart.length} <TiShoppingCart /> </Button>}
    /* options={{
      closeOnClick: false,
    }} */
    >
      <div>
        <Button flat waves="effect teal" className="boton-vaciar" onClick={() => vaciar()}>Vaciar</Button>
        <h5>Carrito</h5>

        <ul>
          {productsOnCart.map((product, i) => {
            total += (product.id / 150);
            return (
              <li key={i} className="item-carrito">
                {`ID Producto: ${product.id}`}<Button flat className="boton-eliminar-item" onClick={() => handleClickRemover(product)}><IoIosClose /></Button>
              </li>
            )
          })}
        </ul>

        <p className="multiline"><strong>{`Total: `}</strong> S/ {parseFloat(total.toFixed(2))}</p>
      </div>
    </Dropdown>

  );

}

export default Cart;