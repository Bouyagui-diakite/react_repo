import React from "react";
import Person from "./Person";

const NameList = () => {
  // const persons = [
  //   {
  //     id: 1,
  //     name: "Bouyagui",
  //     age: 25,
  //     specialite: "React",
  //   },

  //   {
  //     id: 2,
  //     name: "Harouna",
  //     age: 20,
  //     specialite: "Java",
  //   },

  //   {
  //     id: 3,
  //     name: "Hamedy",
  //     age: 25,
  //     specialite: "Reseau telecom",
  //   },
  const names = ["Bouyagui", "Harouna", "Hamedy", "Bouyagui"]
  const personList = names.map((name, index) => <h2 key ={index}>{index}-{name}</h2>);
  return <div>{personList}</div>;
};

export default NameList;


//{names.map((name) =>(
//   <h2>{name}</h2>
//))}
