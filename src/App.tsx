//@ts-nocheck
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import { StoreProviders } from './context/StoreProvider';
import Header from "./components/Header";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import { useCurrentPath } from "./hooks/useCurrentPath";
import Payment from "./pages/Payment";


function App() {

  const navigate: void = useNavigate()
  const link = useCurrentPath()
  const pathAdnin = "/admin/adminUse";





  function navigateTo(btn: string): void {
    window.scrollTo(0, 0);
    navigate(btn)
  }



  return (
    <>
      <StoreProviders>
        {link.pathname !== pathAdnin ? < Header /> : null}
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path="/" element={<Home navigate={navigateTo} />} />
          <Route path="/store" element={<Store navigate={navigateTo} />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Order />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/admin/adminUse" element={<Admin />} />
        </Routes>
      </StoreProviders>
    </>
  );
}

export default App;
