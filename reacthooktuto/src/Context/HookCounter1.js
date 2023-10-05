import React, { useContext } from 'react';
import { HookConsumer } from './Context';

const HookCounter1 = () => {

    const {value, setValue} = useContext(HookConsumer)
    return (
        <div>
            <p>count: {value}</p>
            <button onClick={() => setValue(value +1)}>Ajouter</button>
        </div>
    );
};

export default HookCounter1;

