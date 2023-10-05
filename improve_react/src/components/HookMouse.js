import React, { useEffect, useState } from 'react';

const HookMouse = () => {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

const logMousePosition = e =>{
    console.log("Mouse Event");
    setX(e.clientX)
    setY(e.clientY)
}
    useEffect(() =>{
        console.log("UseEffect called");
        window.addEventListener("mousemove", logMousePosition)

        return () =>{
            console.log("Component unmount");
            window.removeEventListener("mousemove", logMousePosition)
        }
    }, [])
    return (
        <div>
            Hooks x-{x} Y-{y}
        </div>
    );
};

export default HookMouse;

