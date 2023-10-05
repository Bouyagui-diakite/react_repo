import React from 'react';




const ComponantA = ({user}) => {

    const {username, avatarsrc} = user;
    const avatar = <img src={avatarsrc} alt={username} />
    return (
        <main>
            <Navbar2 avatar={avatar}/>
        </main>
    );
}

function Navbar2({avatar})
{
    return <nav>{avatar}</nav>
}

export default ComponantA;
