import React from "react";

// Create the context
const UserContext = React.createContext();



// Create the provider
const UserProvider = UserContext.Provider;

// Create the consumer
const UserConsumer = UserContext.Consumer;


export { UserProvider, UserConsumer };




