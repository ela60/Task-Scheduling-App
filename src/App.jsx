import { Route, Routes } from "react-router";
import AppLayout from "./Layout/AppLayout";
import Home from "./pages/Home";
import AboutPage from "./component/AboutPage";
import NotFound from "./component/NotFound";
import DashboardPage from "./component/DashboardPage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout></AppLayout>}>
          <Route index element={<Home></Home>}></Route>
          
          
        </Route>
        <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />  {/* 404 Route */}
          <Route path="/create" element={<DashboardPage />} />  {/* 404 Route */}
         
      </Routes>
    </>
  );
}

export default App;
