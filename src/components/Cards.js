import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Choose Your Subscription Plan</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/bronze-card.jpg'  // Replace with your bronze image
              text='Basic access with limited features'
              label='Bronze - $5/month'
              path='/subscribe/bronze'
            />
            <CardItem
              src='images/silver-card.jpg'  // Replace with your silver image
              text='Enhanced features and support'
              label='Silver - $10/month'
              path='/subscribe/silver'
            />
            <CardItem
              src='images/gold-card.jpg'  // Replace with your gold image
              text='Premium access with all features'
              label='Gold - $20/month'
              path='/subscribe/gold'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;