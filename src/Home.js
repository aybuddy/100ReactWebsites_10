import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <img
        className='home__image'
        // src='https://fortheloveblog.com/wp-content/uploads/2016/07/Amazon-Prime-Banner.jpg'
        src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
        alt=''
      />

      {/* Product id, title, price, rating, image */}
      <div className='home__row'>
        <Product
          id={12345}
          title={'Beyond Order 12 More Rules for Life'}
          price={29.0}
          rating={5.0}
          image={
            'https://images-na.ssl-images-amazon.com/images/I/71mUs3rW9TL.jpg'
          }
        />
        <Product
          id={12345}
          title={'12 Rules for Life: An Antidote to Chaos'}
          price={25.95}
          rating={5.0}
          image={'https://m.media-amazon.com/images/I/41bK7Jt8k+L.jpg'}
        />
      </div>
      <div className='home__row'>
        <Product
          id={14345}
          title={'SAMSUNG 49-inch Odyssey G9 Gaming Monitor'}
          price={1399.99}
          rating={4}
          image={
            'https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SL1500_.jpg'
          }
        />
        <Product
          id={12345}
          title={
            'Fitbit Charge 4 Fitness and Activity Tracker with Built-in GPS, Heart Rate, Sleep & Swim Tracking, Black/Black, One Size (S &L Bands Included)'
          }
          price={135.88}
          rating={5.0}
          image={
            'https://images-na.ssl-images-amazon.com/images/I/71smqRr0pmL._AC_SL1500_.jpg'
          }
        />
        <Product
          id={12345}
          title={"Oh, the Places You'll Go!"}
          price={18.99}
          rating={5.0}
          image={
            'https://images-na.ssl-images-amazon.com/images/I/81YsKZ7EuWL.jpg'
          }
        />
      </div>
      <div className='home__row'>
        <Product
          id={12345}
          title={
            'NOCO Boost Plus GB40 1000 Amp 12-Volt UltraSafe Lithium Jump Starter Box, Car Battery Booster Pack, Portable Power Bank Charger, And Jumper Cables For 6-Liter Gasoline And 3-Liter Diesel Engines'
          }
          price={99.95}
          rating={5.0}
          image={
            'https://images-na.ssl-images-amazon.com/images/I/913%2BOdWA3NL._AC_SL1500_.jpg'
          }
        />
      </div>
    </div>
  );
}

export default Home;
