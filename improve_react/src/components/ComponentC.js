import React, {useContext} from 'react';
import ComponantB from './ComponantB';
import { UserConsumer } from './UserContext';
import { ChannelConsumer } from './ChannelContext';


const ComponentC = () => {

    const user = useContext(UserConsumer)
    const channel = useContext(ChannelConsumer)
    return (
        <div>
            <h4>{`Hello ${user} - ${channel}`}</h4>
            <ComponantB/>
        </div>
    );
}

export default ComponentC;
