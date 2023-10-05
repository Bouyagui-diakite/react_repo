import React from 'react';
import CustomHook from './CustomHook';

const ConsumApi = () => {

    const [data] = CustomHook('https://jsonplaceholder.typicode.com/todos/?_limit=10')
    return (
       <>
       {
        data && data.map((item) =>{
            return <p key={item.id}>{item.title}</p>
        })
       }
       
       </>
    );
};

export default ConsumApi;