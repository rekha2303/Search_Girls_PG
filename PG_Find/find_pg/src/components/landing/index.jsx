import React, {useEffect, useState} from 'react';
import {placesData} from '../../data/placesData';
import {useNavigate} from 'react-router-dom';

const AboutUs = React.lazy (() => import ('./aboutUs'));
const ContactUs = React.lazy (() => import ('./contactUs'));
const Header = React.lazy (() => import ('../header'));
const Footer = React.lazy (() => import ('../footer'));
const Search = React.lazy (() => import ('./search'));

const Landing = () => {
  const [properties, setProperties] = useState ([]);
  const [cartItems, setCartItems] = useState (0);
  const [cart, setCart] = useState ([]);
  const navigate = useNavigate ();

  useEffect (() => {
    setProperties (placesData);
  }, []);

  const handleClick = property => {
    navigate ('/RoomDetails', {state: {property}});
  };

  const addToCart = properties => {
    // Check if the property is already in the cart
    const isAlreadyInCart = cart.some (item => item.id === properties.id);

    //If not in cart, add the property to the cart
    if (!isAlreadyInCart) {
      setCartItems (prevCount => prevCount + 1);
      setCart ([...cart, properties]);

      console.log ('Item added to cart:', properties);
    } else {
      console.log ('Item is already in the cart:', properties);
    }
  };

  return (
    <div className="Main-Container">
      <React.Suspense fallback={<div>Loading...</div>}>
        <Header cartItems={cartItems} />
        {console.log ('Item added to cart:', cartItems)}
      </React.Suspense>
      <div style={{marginTop: '2rem'}}>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Search
            setCartItems={setCartItems}
            setProperties={setProperties}
            handleClick={handleClick}
            addToCart={addToCart}
          />

        </React.Suspense>
        <React.Suspense fallback={<div>Loading...</div>}>
          <AboutUs />
        </React.Suspense>
        <React.Suspense fallback={<div>Loading...</div>}>
          <ContactUs />
        </React.Suspense>

      </div>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </React.Suspense>
    </div>
  );
};

export default Landing;
