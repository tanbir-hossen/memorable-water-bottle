import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css';

const Bottles = () => {
    const [bottles, setBottles] = useState([])
    useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    })

    const [cart, setCart] = useState([]);

    const handleAddToCart = bottle => {
        const newCart = [...cart, bottle];
        setCart(newCart)
    }
    return (
        <div>
            <h3>Bottles Availabe: {bottles.length}</h3>
            <h3>Cart: {cart.length}</h3>
            <div className="bottle-container">
            {
                bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;