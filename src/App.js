
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home2 from "./pages/use/Home2";

function App() {
    return(
      <>
          <div className='navbar'>
              <Routes>
                  <Route path={'/'} element={<Home2></Home2>}></Route>
                  {/*<Route path={'register'} element={<Register></Register>}></Route>*/}
                  {/*<Route path={'home'} element={<Home></Home>}>*/}
                  {/*    <Route path={''} element={<Listblog></Listblog>}></Route>*/}
                  {/*    <Route path={'addblog'} element={<Addblog></Addblog>}></Route>*/}
                  {/*</Route>*/}
              </Routes>
          </div>
      </>
    );
}

export default App;
