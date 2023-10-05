import React from 'react';

const Child = (props) => {
    return (
        <div>
            <button onClick={() => props.greethandler("Enfant")}>click Me</button>
        </div>
    );
};

export default Child;