// src/App.jsx
import React, { useState } from 'react';
import IconSwitch from './components/IconSwitch';
import CardsView from './components/CardsView';
import ListView from './components/ListView';

const products = [
  { id: 1, name: 'Nike Metcon 2', color: 'red', price: '$130', img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg" },
  { id: 2, name: 'Nike Metcon 2', color: 'green', price: '$130', img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg" },
  { id: 3, name: 'Nike Metcon 2', color: 'blue', price: '$130', img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg" },
  { id: 4, name: 'Nike Metcon 2', color: 'black', price: '$130', img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg" },
  { id: 5, name: 'Nike Free Run', color: 'black', price: '$170', img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg" },
  { id: 6, name: 'Nike Metcon 3', color: 'green', price: '$150', img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg" },
];

const App = () => {
  const [view, setView] = useState('module'); // 'module' or 'list'

  const onSwitch = () => {
    setView(prevView => (prevView === 'module' ? 'list' : 'module'));
  };

  return (
    <div>
      <IconSwitch icon={view === 'module' ? 'view_list' : 'view_module'} onSwitch={onSwitch} />
      {view === 'module' ? <CardsView items={products} /> : <ListView items={products} />}
    </div>
  );
};

export default App;