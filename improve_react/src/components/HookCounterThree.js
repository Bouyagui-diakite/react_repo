import React, { useState } from "react";

const HookCounterThree = () => {
  const [name, setName] = useState({
    firstname: "",
    lastname: "",
  });
  return (
    <form>
      <input
        type="text"
        value={name.firstname}
        onChange={(e) => setName({ ...name, firstname: e.target.value })}
      />
      <input
        type="text"
        value={name.lastname}
        onChange={(e) => setName({ ...name, lastname: e.target.value })}
      />
      <h2>Votre nom est - {name.firstname}</h2>
      <h2>Votre prenom est - {name.lastname}</h2>
      {/* <h2>{JSON.stringify(name)}</h2> */}
    </form>
  );
};

export default HookCounterThree;
