import React from 'react';

const Person = ({person}) => {
    return (
        <div>
            <h2> je suis {person.name}, j'ai {person.age}, j'ai des competences en {person.specialite}</h2>
        </div>
    );
};

export default Person;