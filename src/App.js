import './App.css'
import Inputs from './Hooks/useReducer/Inputs';
import Form from './Hooks/useReducer/Inputs';
import Increment from './Hooks/useReducer/increment';
import ColorPicker from './Hooks/useReducer/Colorpicker';
import NameSubmit from './Hooks/useReducer/NameSubmit';
import SearchProduct from './Hooks/useEffect/SearchProduct';
import SetSearch from './Hooks/useEffect/SetSearch';
import LocalStorage from './Hooks/useState/LocalStorage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from './Hooks/useParams/ProductDetails';
import ProductList from './Hooks/useParams/ProductList';
import Child from './Hooks/useContext/child';
import Parent from './Hooks/useContext/parent';
import BucketList from './Hooks/useState/BucketList';
/* import ColorPicker from "./Hooks/useState/ColorPicker";
import Incre from "./Hooks/useState/incre"; */
function App() {
  return (
    <div className="App">
      {/* <Incre/> */}

      {/* <ColorPicker/> */}
      {/* <Inputs /> */}
      {/* <Increment/> */}
      {/* <ColorPicker /> */}
      {/* <NameSubmit /> */}
      {/* <SearchProduct /> */}
      {/* <SetSearch /> */}
      {/* <LocalStorage /> */}
      <Router>
        <Parent>
          <Routes>
            <Route path='/' element={<ProductList />} />
            <Route path='/users/:id' element={<ProductDetails />} />
            <Route path='/child' element={<Child />} />
            <Route path='/usestate/bucketlist' element={<BucketList />} />
          </Routes>
        </Parent>
      </Router>
    </div>
  );
}

export default App;
