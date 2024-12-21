// src/components/CardsView.jsx
import React from 'react';
import ShopCard from './ShopCard';

const CardsView = ({ items }) => {
  return (
    <div className="cards-view">
      {items.map(item => (
        <ShopCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CardsView;