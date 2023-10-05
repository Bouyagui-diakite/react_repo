import { useNavigate } from 'react-router-dom';
import React from 'react';

const Home = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Home page</h1>
            <button onClick={() => navigate('order')}>Placer une commande</button>
        </div>
    );
};

export default Home;