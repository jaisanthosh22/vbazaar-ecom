import "../css/cart.css";
import { useContext } from "react";
import { CartContext } from "../pages/CartContext";



function Cart() {
    const {
    cart,
    increaseQty,
    decreaseQty,
    removeItem,
    clearCart,
} = useContext(CartContext);
    
    const subtotal = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
    );

    // const shipping = subtotal > 0 ? 0 : 0;

    // const tax = subtotal * 0.18;

    const total = subtotal  ;

    return (
        <>
            <div className="container py-4">
                <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
                    <div>
                        <h1 className="h3 fw-bold mb-1">Your Shopping Cart</h1>
                        <p className="text-secondary mb-0">
                            Review your items and proceed to checkout.
                        </p>
                    </div>

                    <button className="btn btn-outline-soft fw-semibold">
                        ← Continue Shopping
                    </button>
                </div>

                <div className="row g-4 align-items-start">
                    <div className="col-lg-8">
                        <div className="card p-3">
                            {cart.map((product) => (
                                <div
                                    key={product._id}
                                    className="d-flex gap-3 py-3 border-bottom"
                                >
                                    <img
                                        src={product.images?.[0]?.images}
                                        alt={product.name}
                                        style={{
                                            width: "120px",
                                            height: "120px",
                                            objectFit: "cover",
                                            borderRadius: "10px",
                                        }}
                                    />

                                    <div className="flex-grow-1 d-flex flex-column">
                                        <div className="d-flex justify-content-between align-items-start">
                                            <div>
                                                <h5 className="fw-bold mb-1">
                                                    {product.name}
                                                </h5>

                                                <p className="text-secondary small mb-2">
                                                    {product.description}
                                                </p>

                                                <h5
                                                    className="fw-bold mb-3"
                                                    style={{
                                                        color: "var(--blue)",
                                                    }}
                                                >
                                                    ₹{product.price}
                                                </h5>
                                            </div>

                                            <button className="btn btn-sm btn-light"  onClick={clearCart}>
                                                ✕
                                            </button>
                                        </div>

                                        <div className="d-flex flex-wrap justify-content-between align-items-center mt-auto">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="d-flex border rounded overflow-hidden">
                                                    <button className="btn btn-light"  onClick={() => decreaseQty(product._id)}>
                                                        −
                                                    </button>

                                                    <span className="px-3 d-flex align-items-center">
                                                      {product.qty}
                                                    </span>

                                                    <button className="btn btn-light"    onClick={() => increaseQty(product._id)} >
                                                        +
                                                    </button>
                                                </div>

                                                <button className="btn btn-link text-danger text-decoration-none p-0" onClick={() => removeItem(product._id)}
>
                                                    🗑 Remove
                                                </button>

                                                <button className="btn btn-link text-decoration-none p-0">
                                                    🔖
                                                </button>
                                            </div>

                                            <h5 className="fw-bold mb-0">
                                                ₹{product.price * product.qty}
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card p-4 mb-4">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h4 className="fw-bold mb-0">
                                    Order Summary
                                </h4>

                                <span className="text-secondary">
                                    {cart.length} items
                                </span>
                            </div>

                            <div className="d-flex justify-content-between py-2">
                                <span>🧾 Subtotal</span>
                                <span>₹{subtotal}</span>
                            </div>

                            <div className="d-flex justify-content-between py-2">
                                <span>🚚 Shipping</span>
                                <span className="text-success">Free</span>
                            </div>

                            {/* <div className="d-flex justify-content-between py-2">
                                <span>🧮 Tax (18%)</span>
                                <span>₹{tax.toFixed(2)}</span>
                            </div> */}

                            <hr />

                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <a
                                    href="#"
                                    className="text-decoration-none fw-semibold"
                                    style={{ color: "var(--blue)" }}
                                >
                                    🏷 Apply Coupon
                                </a>

                                <span>›</span>
                            </div>

                            <hr />

                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className="fw-bold mb-0">Total</h5>

                                <h4 className="fw-bold total-amt mb-0">
                                   ₹{total.toFixed(2)}
                                </h4>
                            </div>

                            <p className="text-success small mt-2 mb-3">
                                You save ₹0 on this order
                            </p>

                            <button className="btn btn-checkout text-white w-100 mb-4">
                                Proceed to Checkout
                            </button>

                            <div>
                                <p className="text-secondary small mb-2">
                                    We Accept
                                </p>

                                <div className="d-flex flex-wrap gap-2">
                                    <span className="payment-badge">VISA</span>
                                    <span className="payment-badge">MC</span>
                                    <span className="payment-badge">UPI</span>
                                    <span className="payment-badge">
                                        Paytm
                                    </span>
                                    <span className="payment-badge">
                                        GPay
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="card p-4">
                            <div className="d-flex gap-3 mb-4">
                                <span className="icon-circle lg">🛡</span>

                                <div>
                                    <h6 className="fw-bold mb-1">
                                        Secure Checkout
                                    </h6>

                                    <p className="text-secondary small mb-0">
                                        Your payment information is safe with
                                        us.
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex gap-3 mb-4">
                                <span className="icon-circle lg">↺</span>

                                <div>
                                    <h6 className="fw-bold mb-1">
                                        Easy Returns
                                    </h6>

                                    <p className="text-secondary small mb-0">
                                        30-day return policy on most items.
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex gap-3">
                                <span className="icon-circle lg">✅</span>

                                <div>
                                    <h6 className="fw-bold mb-1">
                                        100% Genuine Products
                                    </h6>

                                    <p className="text-secondary small mb-0">
                                        We only sell authentic and original
                                        products.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;    