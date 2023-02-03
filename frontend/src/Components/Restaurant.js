import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import axios from 'axios';

const ProductList = () => {
    const { restaurantId } = useParams();

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`http://localhost:8080/api/sequelize/restaurantsWithProducts/${restaurantId}`);
            console.log(result)
            setRestaurants(result.data);
        };
        fetchData();
    }, [restaurantId]);

    return (
        <ul>
            {restaurants.map(restaurant => (
                <div>
                    <h1>{restaurant.Name}</h1>
                    <h2> Address: {restaurant.Address}</h2>
                    {restaurant.Products.map(prod => (
                        <ul key={prod.Name}>
                            {prod.Name}: $ {prod.Price}
                        </ul>
                    ))}
                </div>

            ))}
        </ul>
    );
};

export default ProductList;
