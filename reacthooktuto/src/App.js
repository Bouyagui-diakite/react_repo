import {useState} from "react";
import ComposantA from "./Context/ComposantA";
import { ContextProvider, HookProvider } from "./Context/Context";
import HookCounter1 from "./Context/HookCounter1";


function App() {

  const {value, setValue} = useState(0);

  return (
    <div className="app">

     {/* <ContextProvider value="Bouyagui">
      <ComposantA/>
     </ContextProvider> */}

     <HookProvider value={{ value, setValue }}>
      <HookCounter1/>
     </HookProvider>

    </div>
  );
}

export default App;
