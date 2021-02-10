import React, { useState, useEffect, useRef } from 'react'
import { Col, Modal, Button, Card, CardTitle } from 'react-materialize'

const Product = (props) => {
  
  const [flag, setFlag] = useState(true);
  const { productsOnCart } = props.data;
  const prevProductsOnCart = usePrevious(productsOnCart);
  const { product,data } = props;

  useEffect(() => {
    if (productsOnCart.length == 0) {
      setFlag(true);
    } else if (prevProductsOnCart.indexOf(product) !== -1 && productsOnCart.indexOf(product) === -1) {
      setFlag(!flag);
    }

  }, [productsOnCart]);

  const handleClickAgregar = () => {
    data.handleAddition(product);
    setFlag(!flag);
  }

  const handleClickRemover = () => {
    data.handleRemove(product);
  }


  const trigger = <Button data-target={product.id} flat waves="effect" className="modal-trigger" >Vista Previa</Button>
  let boton;
  if (flag) {
    boton = <Button waves="effect" waves="light" className="boton-agregar" onClick={handleClickAgregar}>Agregar</Button>;
  } else {
    boton = <Button waves="effect" waves="light" className="boton-eliminar" onClick={handleClickRemover}>Eliminar</Button>;
  }

  return (
    <Col s={12} m={6} l={4}>
      <Card
        actions={[trigger, boton]}
        className="large multiline"
        header={<CardTitle image={product.baseimageurl} >{`S/ ${parseFloat((product.id / 150).toFixed(2))}`}</CardTitle>}
      >
        <h6>{`ID Producto: ${product.id}`}</h6>
        <p>{`Fecha de creación: ${product.date}`}</p>

      </Card>
      <Modal
        actions={<Button flat modal="close" waves="effect" waves="green">Cerrar</Button>}
        id={product.id}
      >
        <Card
          actions={boton}
          className="large multiline"
          header={<CardTitle image={product.baseimageurl} >{`S/ ${parseFloat((product.id / 150).toFixed(2))}`}</CardTitle>}
        >
          <h6>{`ID Producto: ${product.id}`}</h6>
          <h6>Información Extra</h6>
          <p>{`Dimensiones del producto:
                Alto: ${product.height} Ancho: ${product.width}`}
          </p>

        </Card>
      </Modal>
    </Col>
  );

}

export default Product;


function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();

  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
}