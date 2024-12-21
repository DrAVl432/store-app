// src/components/ListView.jsx
import React from 'react';
import ShopItem from './ShopItem';

const ListView = ({ items }) => {
  return (
    <div className="list-view">
      {items.map(item => (
        <ShopItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ListView;