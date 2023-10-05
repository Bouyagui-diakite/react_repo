import React,{useContext} from 'react';
import { ContextConsumer } from './Context';


const ComponantB = () => {

    const user = useContext(ContextConsumer);
    return (
        <div>
            <h1>{`Hello ${user}`}</h1>
        </div>
    );
};

export default ComponantB;