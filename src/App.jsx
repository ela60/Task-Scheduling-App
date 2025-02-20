import { Route, Routes } from "react-router";
import AppLayout from "./Layout/AppLayout";
import Home from "./pages/Home";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout></AppLayout>}>
          <Route index element={<Home></Home>}></Route>
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
