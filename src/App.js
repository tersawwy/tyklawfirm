import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Bookpage from "./pages/book";
import AboutUs from "./pages/aboutus";
import ContactUs from "./pages/contact";
import PaymentPage from "./pages/plans";
import Form from "./pages/formpage";
import Pay from "./pages/pay";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/login";
import Cases from "./pages/your-cases";
import { UserProvider } from "./context/UserContext";
import ClientStatusPage from "./pages/clientstatuspage";
import ChatBot from "./components/chatbot";

function App() {
  return (
    <>
      <div>
        <UserProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/book" element={<Bookpage />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/plans" element={<PaymentPage />} />
              <Route path="/form" element={<Form />} />
              <Route path="/pay" element={<Pay />} />
              <Route path="/login" element={<Login />} />
              <Route path="/yourcases" element={<Cases />} />
              <Route path="/clientstatus" element={<ClientStatusPage />} />
            </Routes>
            <ChatBot />
          </BrowserRouter>
        </UserProvider>
      </div>
      <Footer />
    </>
  );
}

export default App;
