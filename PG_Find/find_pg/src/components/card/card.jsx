import React from 'react';
import {useState, useEffect} from 'react';
import imagePath from '../../assets/image1.jpg';
import {useNavigate} from 'react-router-dom';
import RoomDetails from '../roomDetails/roomDetails';

export const Card = (props, {handleClick}, {addToCart}) => {
  // const [properties, setProperties] = useState([]);
  // const imagePath = process.env.PUBLIC_URL + '/images/image1.jpg';
  const [showImages, setShowImages] = useState (false);
  const navigate = useNavigate ();
  // // const [cart, setCart] = useState ([]);

  //    const toggleImages = () => {
  //        setShowImages(!showImages);
  //    };

  //     useEffect(()=>{

  //      setProperties(placesData);
  //       }, []);
  ////
  //   const handleClick = property => {
  //     navigate ('/RoomDetails', {state: {property}});
  //   };

  //const addToCart = property => {
  // Check if the property is already in the cart
  // const isAlreadyInCart = cart.some (item => item.id === property.id);

  // If not in cart, add the property to the cart
  //     if (!isAlreadyInCart) {
  //       props.setCartItems (prevCount => prevCount + 1);
  //       setCart ([...cart, property]);

  //       console.log ('Item added to cart:', property);
  //     } else {
  //       console.log ('Item is already in the cart:', property);
  //     }
  //   };
  ////
  return (
    <div className="card-top">
      {props.properties.map ((property, index) => (
        <div
          key={property.id}
          className="card"
          style={{margin: '25px', width: '300px'}}
        >
          <div className={`image-slider ${showImages ? 'show' : ''}`}>
            {property.images.map ((image, index) => (
              <img
                key={index}
                src={imagePath}
                className="card-img-top"
                alt={image}
              />
            ))}

          </div>
          <div className="card-body">
            <h5 className="card-title">{property.name}</h5>
            <p className="card-text">{property.location}</p>
            <div className="d-flex flex-row flex-wrap justify-content-between p-3">
              <button
                onClick={() => handleClick (property)}
                className="btn btn-danger"
              >
                Details
              </button>

              <button
                onClick={() => addToCart (props)}
                className="btn btn-danger"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Card;
