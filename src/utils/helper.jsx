export function handleClick(
  id,
  setCartData,
  setNotify,
  setMessage,
  setType,
  setCount,
  Products
) {
  const product = Products.find((e) => e.id === id);
  if (!product) {
    return;
  }
  setCartData((cartData) => {
    const exists = cartData && cartData.some((item) => item.id === id);
    if (exists) {
      return cartData.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      );
    } else {
      return [...cartData, { ...product, quantity: 1 }];
    }
  });

  setNotify(true);
  setMessage("Added successfully");
  setType("success");
  setCount((pre) => pre + 1);
}
