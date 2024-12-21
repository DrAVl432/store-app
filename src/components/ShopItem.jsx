// src/components/ShopItem.jsx
import React from 'react';

const ShopItem = ({ item }) => {
  return (
    <div className="shop-item">
      <img src={item.img} alt={item.name} />
      
      <h3 class="item-name">{item.name}</h3>
        <p>{item.color}</p>
      
        <span class="price-span">{item.price}</span>
      <button>Add to cart</button>
    </div>
  );
};

export default ShopItem;