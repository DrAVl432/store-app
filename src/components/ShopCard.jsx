// src/components/ShopCard.jsx
import React from 'react';

const ShopCard = ({ item }) => {
  return (
    <div className="shop-card">
      <div className='shop-card-h3-p'>
      <h3 class="shop-card-item-name">{item.name}</h3>
      <p>{item.color}</p>
      </div>
      <img src={item.img} alt={item.name} />
      <div class="shop-card-basement">
      <span class="price-span">{item.price}</span>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default ShopCard;