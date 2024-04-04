import React, {useState, useEffect} from 'react';
import {TextField, Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
////import {placesData} from '../../data/placesData';
import Card from '../card/card';
import InsightsIcon from '@mui/icons-material/Insights';

const Search1 = (props, {handleClick}, {addToCart}) => {
  //// const [properties, setProperties] = useState ([]);
  const [searchQuery, setSearchQuery] = useState ('');
  console.log ('addToCart 2', props.addToCart);
  //// useEffect (() => {
  //     // fetch('../../data/placesData.json')
  //     //   .then((response) => {
  //     //     console.log("tre", response)
  //     //     if (!response.ok) {
  //     //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     //     }
  //     //     return response.json();
  //     //   })
  //     //   .then((data) => setProperties(data))
  //     //   .catch((error) => console.error('Error fetching data:', error));
  //// setProperties (placesData);
  ///}, []);

  const handleSearchChange = event => {
    setSearchQuery (event.target.value);
  };

  const filteredProperties = props.filter (property => {
    // Filter properties based on name or any other property you want to search
    return (
      property.name.toLowerCase ().includes (searchQuery.toLowerCase ()) ||
      property.location.toLowerCase ().includes (searchQuery.toLowerCase ())
    );
  });

  return (
    <div id="search">
      <div className="d-flex flex-row flex-wrap justify-content-between p-3">
        <div className="w-100 d-flex flex-column align-items-center justify-content-center">
          <h1>Find luxurious Girls PG</h1>
          <p className="w-75">
            "Find Your Perfect Girls PG Accommodation Hassle-Free! Explore our curated listings to discover a range of comfortable and secure PG options tailored for female residents. From cozy rooms to vibrant communal spaces, we've got you covered. Begin your search now and embark on a journey towards a convenient and enriching living experience."
          </p>

        </div>

        <div className="d-flex flex-row align-items-center justify-content-center w-75 ps-5">
          <TextField
            type="text"
            id="outlined_basic"
            label="Search Girls PG"
            variant="outlined"
            size="small"
            fullWidth
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <Button variant="contained" style={{marginLeft: '10px'}}>
            <ArrowRightAltIcon />
          </Button>
        </div>
      </div>

      <div className="w-100 m-3">
        <h2>Property List</h2>
        <div>
          {console.log ('addToCart1', addToCart)}
          <Card
            props={filteredProperties}
            setCartItems={props.setCartItems}
            handleClick={handleClick}
            addToCart={addToCart}
          />
        </div>
        {console.log ('addToCart 2', addToCart)}
      </div>

    </div>
  );
};
export default Search1;
