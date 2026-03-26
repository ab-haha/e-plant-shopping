import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';
import CartItem from './CartItem';

function ProductList() {
    const [showCart, setShowCart] = useState(false);
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    const plantsArray = [
        {
            category: "Air Purifying",
            plants: [
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15"
                },
                {
                    name: "Spider Plant",
                    image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: "$12"
                },
                {
                    name: "Peace Lily",
                    image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lily-4269365_1280.jpg",
                    description: "Removes mold spores and thrives in low light.",
                    cost: "$18"
                }
            ]
        },
        {
            category: "Aromatic",
            plants: [
                {
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?m=600&auto=format&fit=crop&q=60",
                    description: "Calming scent, used in aromatherapy.",
                    cost: "$20"
                },
                {
                    name: "Jasmine",
                    image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?m=600&auto=format&fit=crop&q=60",
                    description: "Sweet fragrance, promotes better sleep.",
                    cost: "$22"
                },
                {
                    name: "Rosemary",
                    image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
                    description: "Invigorating scent, often used in cooking.",
                    cost: "$15"
                }
            ]
        }
    ];

    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <div>
            <nav className="navbar" style={{backgroundColor: '#4CAF50', color: 'white', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div><h1>Paradise Nursery</h1></div>
                <div className="cart" onClick={() => setShowCart(true)} style={{cursor: 'pointer'}}>
                    <h2 style={{margin: 0}}>Cart 🛒 ({totalQuantity})</h2>
                </div>
            </nav>

            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((category, index) => (
                        <div key={index}>
                            <h2 className="category-title">{category.category}</h2>
                            <div className="product-list">
                                {category.plants.map((plant, i) => (
                                    <div className="product-card" key={i}>
                                        <img src={plant.image} alt={plant.name} />
                                        <div className="product-title">{plant.name}</div>
                                        <p className="product-description">{plant.description}</p>
                                        <div className="product-price">{plant.cost}</div>
                                        <button 
                                            className="add-to-cart-btn"
                                            disabled={cartItems.some(item => item.name === plant.name)}
                                            onClick={() => dispatch(addItem(plant))}>
                                            {cartItems.some(item => item.name === plant.name) ? "Added to Cart" : "Add to Cart"}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={() => setShowCart(false)} />
            )}
        </div>
    );
}

export default ProductList;