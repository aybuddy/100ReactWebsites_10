import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='https://images-na.ssl-images-amazon.com/images/G/01/MaloneLP/9XYZ_header.jpg'
          alt=''
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your shopping basket is empty</h2>
            <p>
              You have no items in your basket. To buy one or more items, click
              'Add to Basket' next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className='checkout__title'>Your shopping basket</h2>
            {basket.map((item) => {
              console.log(item);
              return (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
