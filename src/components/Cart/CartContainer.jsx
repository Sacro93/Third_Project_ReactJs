import ButtonAction from "../button/Button";
import { useContext, useState } from "react";
import { cartContext } from "../../storage/cartContext";
import FormCheckout from "../Forms/FormData";
import { createOrder } from "../../services/firebase";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function CartContainer() {
  const {
    cart,
    getTotalItemsInCart,
    getTotalPriceInCart,
    removeItem,
    clear,
    getCountByItem,
  } = useContext(cartContext);

  const [orderId, setOrderId] = useState();

  function handleCheckout(evt, userData) {
    evt.preventDefault();

    const items = cart.map(({ product, count }) => ({
      id: product.id,
      price: product.price,
      title: product.title,
      count,
    }));

    const order = {
      buyer: userData,
      items: items,
      total: getTotalPriceInCart(),
      date: new Date(),
    };

    async function sendOrder() {
      let id = await createOrder(order);
      setOrderId(id);
    }

    sendOrder();
  }

  if (orderId)
    return Swal.fire({
      icon: "success",
      title: "Genial! ",
      text: `Solicitud de compra N° ${orderId} procesada con exito! Un asesor va a estar en contacto con vos en menos de 1 hora!`,
      confirmButtonText: "Volver al menu",
    }).then(function (result) {
      if (result.value) {
        window.location = "/";
      }
    });

  return (
    <>
      <div>
        {cart.map(({ product }) => (
          <div key={product.id}>
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col">
                  <div className="card mb-4">
                    <div className="card-body p-4">
                      <div className="row align-items-center">
                        <div className="col-md-2">
                          <img
                            className="img-fluid"
                            src={product.img}
                            alt={product.title}
                          />
                        </div>
                        <div className="col-md-2 d-flex justify-content-center">
                          <div>
                            <p className="small text-muted mb-4 pb-2">Product</p>
                            <p className="lead fw-normal mb-0">{product.title}</p>
                          </div>
                        </div>
                        <div className="col-md-2 d-flex justify-content-center">
                          <div>
                            <p className="small text-muted mb-4 pb-2">Cantidad</p>
                            <p className="lead fw-normal mb-0">
                              {getCountByItem(product.id)}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-2 d-flex justify-content-center">
                          <div>
                            <p className="small text-muted mb-4 pb-2">Price</p>
                            <p className="lead fw-normal mb-0">{product.price}</p>
                          </div>
                        </div>
                        <div className="col-md-2 d-flex ">
                          <div>
                            <ButtonAction
                              onClick={() => removeItem(product.id)}
                            >
                              {" "}
                              Deletle
                            </ButtonAction>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="card mb-5">
              <div className="card-body p-4">
            
                <div className="float-end">
                
                  <p className="mb-0 me-5 d-flex align-items-center">
                    <span className="small text-muted me-2">Order total:</span>{" "}
                    <span className="lead fw-normal">${getTotalPriceInCart()}</span>
                    
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-end ">
            {cart.length === 0 ? (
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Sin items en el carrito!",
                confirmButtonText: "Volver al menu",
              }).then(function (result) {
                if (result.value) {
                  window.location = "/";
                }
              })
            ) : (
              <div className="container h-100 me-2">
              <br />
              <ButtonAction  onClick={() => clear()}>Clear all products</ButtonAction></div>
            )}
            <div className="container h-100">
              <FormCheckout onCheckout={handleCheckout} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartContainer;
