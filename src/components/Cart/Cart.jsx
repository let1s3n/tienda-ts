import React from 'react'
import { IoIosClose } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import { Dropdown, Button } from 'react-materialize'

const Cart = (props) => {

  const handleClickRemover = (product) => {
    const { handleRemove } = props;
    handleRemove(product);
  }

  const handleVaciar = () => {
    const { handleVaciar } = props;
    handleVaciar();
  }


  const { productsOnCart } = props;
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
        <Button flat waves="effect" waves="teal" className="boton-vaciar" onClick={() => handleVaciar()}>Vaciar</Button>
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