
import { useState, useEffect } from "react";
import "./Home.css";

function Home() {
    // cartItems here
        const [products, setProducts] = useState([]);
        useEffect(()=>{
        fetch("http://localhost:5000/api/v1/products")
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setProducts(data.products);
                })
                .catch((error) => {
                    console.log(error);
                });
        }, []);
        // recommended array here
       const [recommended,setRecommended] = useState([]);
       useEffect(()=>{
        fetch("http://localhost:5000/api/v1/products/recommend").then(res=>res.json()).then(data=>{ console.log(data);setRecommended(data.products)}).catch((err)=>console.log(err))
       },[])

       

        // Paste clearCart function here
        const clearCart = () => {
            setCartItems([]);
        };

        // Paste removeItem function here
        const removeItem = (id) => {
            setCartItems(cartItems.filter(item => item.id !== id));
        };

        // Paste changeQty function here
        const changeQty = (id, delta) => {
            setCartItems(
            cartItems.map(item =>
                item.id === id
                ? {
                    ...item,
                    qty: Math.max(1, item.qty + delta)
                    }
                : item
            )
            );
        };

        // Timer
        const [seconds, setSeconds] = useState(14 * 60 + 28);

        useEffect(() => {
            const interval = setInterval(() => {
            setSeconds(prev => (prev > 0 ? prev - 1 : 0));
            }, 1000);

            return () => clearInterval(interval);
        }, []);

    return ( 
    <div>
    <div className="topbar">
    <div className="left"><span>🚚 Free Shipping on orders over $50</span></div>
    <div className="right"><span>⏱ 30-Day Returns</span><span>❓ Help Center</span></div>
    </div>

    <header className="main">
    <div className="logo"><span className="b"></span> vBazaar</div>
    <div className="search">
        <input type="text" placeholder="Search for products..."/>
        <button aria-label="search">🔍</button>
    </div>
    <nav className="links">
        <a href="#">Products</a>
        <a href="#">Categories ▾</a>
        <a href="#">Deals</a>
        <a href="#">New Arrivals</a>
    </nav>
    <div className="header-actions">
        <div className="item">♡ <span>Wishlist</span></div>
        <div className="item">👤 <span>Account</span></div>
        <div className="item">🛒 <span>Cart</span><span className="cart-badge" id="cart-count">8</span></div>
    </div>
    </header>

    <main>
    <div className="page-title-row">
        <h1>VBazaar's Special Products</h1>
        
    </div>

    <div className="trust-row">
        <span>🛡 Secure Checkout</span>
        <span>↩ Easy Returns</span>
        <span>✅ 100% Genuine Products</span>
    </div>

     {/* //creating card for this product    */}

     <div className="cart-grid">

     {products.map((product) => (
        <div className="item-card" key={product._id}>

            <button
                className="close-x"
                onClick={() => removeProduct(product._id)}
            >
                ✕
            </button>

            <div className="item-top">
            
            <img
             src={product.images?.[0]?.images}
             alt={product.name}
            />

                <div className="item-info">

                    <h3>{product.name}</h3>

                    <div className="cat">
                        ⭐ {product.ratings} ({product["no of reviews"]} Reviews)
                    </div>

                    <p>{product.description}</p>

                    <div className="price">
                        ₹{product.price}
                    </div>

                </div>

            </div>

            <div className="qty-row">

                <div className="stock">
                    Stock : {product.stocks}
                </div>

                <button className="continue-btn">
                    Add to Cart
                </button>

            </div>

        </div>
    ))}
</div>

    <div className="section">
    <div className="section-head">
        <h2>Recommended For You</h2>
        <a href="#">View All</a>
    </div>

    <div className="product-row">
        {recommended.map((recommend) => (
            <div className="mini-card" key={recommend._id}>
                <img src={recommend.images?.[0]?.images} alt={recommend.name} />

                <div>
                    <div className="name">{recommend.name}</div>
                    <div className="price">₹{recommend.price}</div>
                </div>

                <button className="add">🛒</button>
            </div>
        ))}
        </div>
    </div>


    <div className="reserve-bar">
        <div>🛡 Your products are reserved for <span className="timer" id="timer">14 : 28</span> minutes</div>
        <button className="continue-btn">Continue Shopping →</button>
    </div>



    <div className="perks">
        <div className="perk"><div className="icon">🚚</div><div><div className="title">Free Shipping</div><div className="sub">On orders over $50</div></div></div>
        <div className="perk"><div className="icon">🛡</div><div><div className="title">Secure Payment</div><div className="sub">100% secure checkout</div></div></div>
        <div className="perk"><div className="icon">↺</div><div><div className="title">Easy Returns</div><div className="sub">30 days return policy</div></div></div>
        <div className="perk"><div className="icon">🎧</div><div><div className="title">24/7 Support</div><div className="sub">We're here to help</div></div></div>
    </div>
    </main>

    <footer>
    <div className="footer-grid">
        <div>
        <div className="flogo"> vBazaar</div>
        <p>Your one-stop shop htmlFor the best products at the best prices.</p>
        <div
        style={{
            marginTop: "14px",
            display: "flex",
            gap: "12px",
        }}
>               <span>📘</span><span>📷</span><span>🐦</span><span>▶️</span>
        </div>
        </div>
        <div>
        <h4>Shop</h4>
        <ul><li>All Products</li><li>Categories</li><li>Deals</li><li>New Arrivals</li></ul>
        </div>
        <div>
        <h4>Customer Service</h4>
        <ul><li>Contact Us</li><li>Shipping Policy</li><li>Returns & Exchanges</li><li>FAQ</li></ul>
        </div>
        <div>
        <h4>Company</h4>
        <ul><li>About Us</li><li>Careers</li><li>Privacy Policy</li><li>Terms & Conditions</li></ul>
        </div>
        <div>
        <h4>Subscribe to our newsletter</h4>
        <p>Get updates on new products and offers</p>
        <div className="sub-box">
            <input type="email" placeholder="Enter your email"/>
            <button>Subscribe</button>
        </div>
        <div
            style={{
                marginTop: "16px",
                display: "flex",
                gap: "8px",
                fontSize: "20px",
            }}
            >💳 🟠 🅿️ 🍎 🇬</div>
        </div>
    </div>
    <div className="copyright">© 2025 vBazaar. All rights reserved.</div>
    </footer>

    
    </div>
 );
    
}

export default Home;