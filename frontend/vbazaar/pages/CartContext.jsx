import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const exist = cart.find((item) => item._id === product._id);

        if (exist) {
            setCart(
                cart.map((item) =>
                    item._id === product._id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                )
            );
        } else {
            setCart([...cart, { ...product, qty: 1 }]);
        }
    };

    const increaseQty = (id) => {
        setCart(
            cart.map((item) =>
                item._id === id
                    ? { ...item, qty: item.qty + 1 }
                    : item
            )
        );
    };

    const decreaseQty = (id) => {
        setCart(
            cart.map((item) =>
                item._id === id
                    ? { ...item, qty: Math.max(1, item.qty - 1) }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCart(cart.filter((item) => item._id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                increaseQty,
                decreaseQty,
                removeItem,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}