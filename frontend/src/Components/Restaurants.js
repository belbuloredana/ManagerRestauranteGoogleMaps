import React, { useState, useEffect } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import axios from 'axios';
import RestaurantIcon from "@material-ui/icons/Restaurant"


const RestaurantsMap = (props) => {
    const [restaurants, setRestaurants] = useState([]);


    useEffect(() => {
        axios
            .get('http://localhost:8080/api/sequelize/restaurants')
            .then((res) => {
                console.log(res)
                setRestaurants(res.data);
            });
    }, []);

    return (
        <Map
            google={props.google}
            style={{ height: '100vh', width: '100%' }}
            zoom={11}
            initialCenter={{
                lat: 44.5087,
                lng: 26.1363,
            }}
        >
            {restaurants.map((restaurant) => (
                <Marker
                    onClick={() => window.location.assign(`/restaurants/${restaurant.RestaurantId}`)}
                    key={restaurant.Name}
                    name={restaurant.Name}
                    position={{ lat: restaurant.Latitude, lng: restaurant.Longitude }}
                    icon={{
                        url: 'https://www.svgrepo.com/show/19461/url-link.svg',
                        scaledSize: new props.google.maps.Size(40, 40)
                    }}
                />
            ))
            }
        </Map >
    );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCuSC3l-QeyjnBddeJMa-5wwFhIh1-Qxlc',
})(RestaurantsMap);

