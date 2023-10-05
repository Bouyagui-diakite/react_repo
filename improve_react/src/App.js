import Counter from "./components/Counter";
import EventBind from "./components/EventBind";
import Form from "./components/Form";
import Message from "./components/Message";
import NameList from "./components/NameList";
import Parent from "./components/Parent";
import Stylecheat from "./components/Stylecheat";
import Usergreeting from "./components/Usergreeting";
import LifecycleA from "./components/LifecycleA";
import ClasseCounter from "./components/ClasseCounter";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import "./components/mystyle.css";
import ClassCounterTwo from "./components/ClassCounterTwo";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from "./components/HookCounterFour";
import ClassCounterOne from "./components/ClassCounterOne";
import HookMouse from "./components/HookMouse";
import MouseContainer from "./components/MouseContainer";
import IntervallHookCounter from "./components/IntervallHookCounter";
import DataFetching from "./DataFetching";
import { Route, Routes } from "react-router-dom";
import Home from "./components2.js/Home";
import About from "./components2.js/About";
import Navbar from "./components2.js/Navbar";
import Order from "./components2.js/Order";
import NomMatch from "./components2.js/NomMatch";
import Products from "./components2.js/Products";
import FeatProduct from "./components2.js/FeatProduct";
import NewProduct from "./components2.js/NewProduct";
import HookCounterOne from "./components/HookCounterOne";
import TwitterApi from "./components/TwitterApi";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/UserContext";
import { ChannelProvider } from "./components/ChannelContext";
import CompterOne from "./components/CompterOne";
import CompterTwo from "./components/CompterTwo";
import CompterThree from "./components/CounterThree";
import ConsumApi from "./components/ConsumApi";
import CustomHook from "./components/CustomHook";

function App() {
  return (
    <div className="App">
      {/* <HookCounterOne/> */}
      <UserProvider value="Bouyagui">
        <ChannelProvider value = "nemesis">
          <ComponentC />
        </ChannelProvider>
      </UserProvider>
      {/* <CompterOne/> */}
      {/* <CompterTwo/> */}
      {/* <CompterThree/> */}
     {/* <ConsumApi/> */}
     <CustomHook/>
      {/* <TwitterApi/> */}
      {/* <Message/> */}
      {/* <Counter/> */}
      {/* <EventBind/> */}
      {/* <Parent/>
    <Usergreeting/>
    <NameList/>
    <Stylecheat/> */}
      {/* <LifecycleA/>
    <Form/> */}
      {/* <ClasseCounter /> */}
      {/* <HookCounter/> */}
      {/* <HookCounterTwo/> */}
      {/* <ClassCounterTwo/> */}
      {/* <HookCounterThree/> */}
      {/* <HookCounterFour/> */}
      {/* <HookCounter/> */}
      {/* <ClassCounterOne/> */}
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}
      {/* <IntervallHookCounter/> */}
      {/* <DataFetching/> */}
      {/* <Navbar/> */}
      {/* <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="order" element={<Order />}></Route>
        <Route path="*" element={<NomMatch />}></Route>

        <Route path="products" element={<Products />}>
          <Route path="featured" element={<FeatProduct />}></Route>
          <Route path="new" element={<NewProduct />}></Route>
        </Route>
      </Routes> */}
    </div>
  );
}

export default App;
