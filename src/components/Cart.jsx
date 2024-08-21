import "../styles/Cart.css";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { ProductContext } from "../context/ProductsProvider";
import { useContext } from "react";
import { LiaTimesSolid } from "react-icons/lia";

export default function Cart() {
  const { setCartData, cartData, setNotify, setMessage, setType } =
    useContext(ProductContext);
  function handleDelete(id) {
    const updatedData = cartData.filter((e) => e.id !== id);
    setCartData(updatedData);
    setNotify(true);
    setMessage("Item Removed From Cart");
    setType("error");
  }
  return (
    <div>
      {cartData.length !== 0 &&
        cartData.map((item) => (
          <div className="cart-container" key={item.id}>
            <div className="cart">
              <div className="quantity">
                <p> {item.quantity}</p>
                <LiaTimesSolid size={"12px"} />
              </div>
              <div className="item-img">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="card-img"
                />
              </div>
              <div className="item-info">
                <span>
                  <p>{item.title}</p>
                  <span> {item.info}</span>
                </span>
                <span>
                  <p>
                    ${item.finalPrice}{" "}
                    <span
                      style={{
                        textDecoration: "line-through",
                        color: "#f8f8f847",
                        marginLeft: "8px",
                      }}
                    >
                      {item.originalPrice}
                    </span>
                  </p>
                </span>
              </div>
              <div className="item-info-del">
                <MdOutlineDeleteOutline
                  className="delete-icon"
                  onClick={() => handleDelete(item.id)}
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
