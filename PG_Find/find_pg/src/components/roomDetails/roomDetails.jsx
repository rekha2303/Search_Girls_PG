import React from 'react';
import imagePath from '../../assets/image1.jpg';
import {useLocation} from 'react-router-dom';
import Header from '../header';

const RoomDetails = props => {
  const {state} = useLocation ();
  const data = state;
  // const { pro } = location.state || {};
  console.log ('data', data.property);

  return (
    <div>
      <Header />

      <div class="card mx-2 mt-5 bg-secondary text-white">
        <div key={data.property.id} class="row g-0">
          <div class="col-md-4 p-3">
            <img src={imagePath} className="card-img-top" alt={imagePath} />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 className="card-title">{data.property.name}</h5>
              <p className="card-text">{data.property.location}</p>
              <p className="card-text">Address :{data.property.address}</p>
              <p className="card-text">Rent : {data.property.price}$</p>
              <p className="card-text">Rating : {data.property.rating}</p>
              <p className="card-text">Amenities : {data.property.amenities}</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RoomDetails;
