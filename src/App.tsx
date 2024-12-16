import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Search } from './components/Search';
import { Products } from './components/Products';
import { Features } from './components/Features';
import { ReviewsSection } from './components/reviews/ReviewsSection';
import { BlogSection } from './components/blog/BlogSection';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { LoginForm } from './components/auth/LoginForm';
import { SignUpForm } from './components/auth/SignUpForm';
import { AuthCallback } from './components/auth/AuthCallback';
import { Shop } from './pages/Shop';
import { About as AboutPage } from './pages/About';
import { Blog } from './pages/Blog';
import { Ingredients } from './pages/Ingredients';
import { Contact } from './pages/Contact';
import { Cart } from './pages/Cart';
import { StripeCheckout } from './components/payment/StripeCheckout';
import { MastercardCheckout } from './components/payment/MastercardCheckout';
import { useAuthStore } from './store/authStore';

function App() {
  const { checkUser } = useAuthStore();

  useEffect(() => {
    checkUser();
  }, [checkUser]);

  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Search />
              <Products />
              <Features />
              <ReviewsSection />
              <BlogSection />
              <FAQ />
            </>
          } />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/checkout/stripe" element={<StripeCheckout />} />
          <Route path="/checkout/mastercard" element={<MastercardCheckout />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;