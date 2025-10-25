import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity } from './cartSlice';

const products = [
  { id: 1, name: "Laptop", price: 700 },
  { id: 2, name: "Phone", price: 400 },
  { id: 3, name: "Keyboard", price: 30 },
];

function App() {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>
      {products.map(p => (
        <div key={p.id}>
          <span>{p.name} - ${p.price}</span>
          <button onClick={() => dispatch(addToCart(p))}>Add</button>
        </div>
      ))}

      <h2>Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          <span>{item.name} (${item.price})</span>
          <input
            type="number"
            value={item.quantity}
            onChange={e =>
              dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
            }
          />
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default App;
