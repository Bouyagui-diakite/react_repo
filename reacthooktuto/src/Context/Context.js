import React from "react";

//creattion de mon contexte

// const defaultValue = {
//     name: "default",
//     setName: () => {

//     },
// };
const MyContext = React.createContext();

const ContextProvider = MyContext.Provider;

const ContextConsumer = MyContext.Consumer

const HookContext = React.createContext();

const HookProvider = HookContext.Provider;
const HookConsumer = HookContext.Consumer;


export { HookProvider, HookConsumer};
export  {ContextProvider, ContextConsumer};
