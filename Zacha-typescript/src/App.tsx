import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import About from "@/scenes/about";
import ProductDetail from "@/scenes/shoponline/ProductDetail";
import ShopOnline from "@/scenes/shoponline";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import ContactUs from "@/scenes/contactUS";
import ProductSubmit from "@/scenes/shoponline/productSubmit";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showMainLayout = !location.pathname.startsWith("/product");
  

  return (
    
    <div className="app bg-black">
    {showMainLayout && (
          <>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <About setSelectedPage={setSelectedPage} />
      <ShopOnline setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      
        </>
)}
<Routes>
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/product-submit/:productId" element={<ProductSubmit />} />
        </Routes>
  </div>
  
  );
  
}
export default App;
