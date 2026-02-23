import React, { useState } from 'react';
import { ArrowUp } from 'lucide-react'; 
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const PaymentPage: React.FC = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank' | 'transfer'>('card');

  return (
    <div className="bg-[#F9F9F9] min-h-screen flex flex-col font-sans">
      
      {/* 1. HEADER */}
      <nav className="bg-white px-8 py-5 flex justify-between items-center sticky top-0 z-50 shadow-sm">
        <h1 
          className="text-2xl font-serif italic text-orange-500 font-bold cursor-pointer"
          onClick={() => navigate('/')}
        >
          Chuks Kitchen
        </h1>
        <div className="hidden md:flex space-x-12 text-sm font-medium text-gray-700">
          <button onClick={() => navigate('/')} className="hover:text-orange-500 transition">Home</button>
          <button onClick={() => navigate('/explore')} className="hover:text-orange-500 transition">Explore</button>
          <button onClick={() => navigate('/orders')} className="hover:text-orange-500 transition">My Orders</button>
          <button className="hover:text-orange-500 transition">Account</button>
        </div>
        <button 
        onClick={() => navigate('/signin')}
        className="bg-orange-500 text-white px-8 py-2.5 rounded-lg font-bold hover:bg-orange-600 transition shadow-sm text-sm">
          Login
        </button>
      </nav>

      {/* 2. MAIN CONTENT  */}
      <main className="flex-grow flex justify-center py-12 px-4">
        <div className="bg-white w-full max-w-2xl p-8 md:p-12 rounded-xl shadow-sm border border-gray-100 h-fit">
          
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Payment</h2>

       
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Pay With:</h3>
            <div className="flex space-x-8">
              {/* Option 1: Card */}
              <label className="flex items-center space-x-2 cursor-pointer">
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${paymentMethod === 'card' ? 'border-green-500' : 'border-gray-300'}`}>
                  {paymentMethod === 'card' && <div className="w-3 h-3 rounded-full bg-green-500" />}
                </div>
                <input 
                  type="radio" 
                  name="payment" 
                  className="hidden" 
                  checked={paymentMethod === 'card'} 
                  onChange={() => setPaymentMethod('card')} 
                />
                <span className="font-medium text-gray-700">Card</span>
              </label>

              {/* Option 2: Bank */}
              <label className="flex items-center space-x-2 cursor-pointer">
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${paymentMethod === 'bank' ? 'border-green-500' : 'border-gray-300'}`}>
                  {paymentMethod === 'bank' && <div className="w-3 h-3 rounded-full bg-green-500" />}
                </div>
                <input 
                  type="radio" 
                  name="payment" 
                  className="hidden" 
                  checked={paymentMethod === 'bank'} 
                  onChange={() => setPaymentMethod('bank')} 
                />
                <span className="font-medium text-gray-700">Bank</span>
              </label>

              {/* Option 3: Transfer */}
              <label className="flex items-center space-x-2 cursor-pointer">
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${paymentMethod === 'transfer' ? 'border-green-500' : 'border-gray-300'}`}>
                  {paymentMethod === 'transfer' && <div className="w-3 h-3 rounded-full bg-green-500" />}
                </div>
                <input 
                  type="radio" 
                  name="payment" 
                  className="hidden" 
                  checked={paymentMethod === 'transfer'} 
                  onChange={() => setPaymentMethod('transfer')} 
                />
                <span className="font-medium text-gray-700">Transfer</span>
              </label>
            </div>
          </div>

          {/* Card Form */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Card Number</label>
              <input 
                type="text" 
                placeholder="1234 5678 9101 1121" 
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-600"
              />
            </div>

            <div className="flex gap-6">
              <div className="w-1/2">
                <label className="block text-sm font-bold text-gray-700 mb-2">Expiration Date</label>
                <input 
                  type="text" 
                  placeholder="MM/YY" 
                  className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-600"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-bold text-gray-700 mb-2">CVV</label>
                <input 
                  type="text" 
                  placeholder="123" 
                  className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-600"
                />
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-center space-x-3">
              <input type="checkbox" className="w-5 h-5 border-gray-300 rounded text-orange-500 focus:ring-orange-500" />
              <span className="text-gray-500 text-sm">Save card details</span>
            </div>
          </div>

          {/* Pay Button */}
          <button className="w-full mt-8 bg-orange-500 text-white py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition shadow-md">
            Pay ₦9,900
          </button>
          
          <p className="text-xs text-gray-400 mt-6 text-center leading-relaxed px-4">
            Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
          </p>

        </div>
      </main>

    <footer className="w-full bg-[#5C4033] text-white pt-16 pb-8 px-8 md:px-16 lg:px-24 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Info */}
        <div className="space-y-4">
          <h3 className="text-2xl font-serif italic text-orange-400">Chuks Kitchen</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.
          </p>
          <p className="text-xs text-gray-400 mt-6 pt-4 border-t border-white/10">
            © 2024 UI Media. All rights reserved.
          </p>
        </div>
    
        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="font-bold text-lg">Quick Links</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/" className="hover:text-orange-400 transition">Home</Link></li>
            <li><Link to="/explore" className="hover:text-orange-400 transition">Explore</Link></li>
            <li><Link to="/orders" className="hover:text-orange-400 transition">My Order</Link></li>
            <li><Link to="/account" className="hover:text-orange-400 transition">Account</Link></li>
            <li><a href="#" className="hover:text-orange-400 transition">Contact</a></li>
          </ul>
        </div>
    
        {/* Contact */}
        <div className="space-y-4">
          <h4 className="font-bold text-lg">Contact Us</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>+234 811 234 5678</li>
            <li>hello@chukskitchen.com</li>
            <li>123 Taste Blvd, Lagos, Nigeria</li>
          </ul>
        </div>
    
        {/* Socials */}
        <div className="space-y-4">
          <h4 className="font-bold text-lg">Follow Us</h4>
          <ul className="space-y-2 text-blue-300 text-sm">
            <li><a href="#" className="hover:text-orange-400 transition">Facebook</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Twitter</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">LinkedIn</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Instagram</a></li>
          </ul>
        </div>
      </div>
    
      {/* Scroll to Top */}
      <div className="flex justify-end mt-12">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-blue-500 p-3 rounded-full hover:bg-blue-600 transition shadow-lg"
        >
          <ArrowUp size={24} className="text-white" />
        </button>
      </div>
    </footer>
    </div>
  );
};

export default PaymentPage;