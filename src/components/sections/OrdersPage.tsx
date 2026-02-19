import React, { useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OrderSummaryPage: React.FC = () => {
  const navigate = useNavigate();
  // State to handle the toggle between Delivery and Pickup
  const [deliveryType, setDeliveryType] = useState<'delivery' | 'pickup'>('delivery');

  return (
    <div className="bg-[#F9F9F9] min-h-screen flex flex-col font-sans">
      
      {/* 1. HEADER / NAVBAR*/}
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
          <button onClick={() => navigate('/orders')} className="text-orange-500 font-bold">My Orders</button>
          <button onClick={() => navigate('/account')}  className="hover:text-orange-500 transition">Account</button>
        </div>
        <button className="bg-orange-500 text-white px-8 py-2.5 rounded-lg font-bold hover:bg-orange-600 transition shadow-sm text-sm">
          Login
        </button>
      </nav>

      {/* 2. MAIN CONTENT */}
      <main className="flex-grow flex justify-center py-12 px-4">
        <div className="bg-white w-full max-w-2xl p-8 md:p-10 rounded-xl shadow-sm border border-gray-100 h-fit">
          
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Order Summary</h2>

          {/* Promo Code Section */}
          <div className="mb-8">
            <label className="block text-lg font-medium text-gray-900 mb-3">Add a Promo Code</label>
            <div className="flex gap-4">
              <input 
                type="text" 
                placeholder="Enter Code here" 
                className="flex-grow border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition">
                Apply
              </button>
            </div>
          </div>

          {/* Cost Breakdown */}
          <div className="space-y-4 mb-6 border-b border-gray-100 pb-6 text-gray-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-bold text-gray-800">₦9,200</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span className="font-bold text-gray-800">₦500</span>
            </div>
            <div className="flex justify-between">
              <span>Service Fee</span>
              <span className="font-bold text-gray-800">₦200</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span className="font-bold text-gray-800">₦0</span>
            </div>
          </div>

          {/* Total */}
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-bold text-gray-900">Total</span>
            <span className="text-2xl font-bold text-gray-900">₦9,900</span>
          </div>

          {/* Delivery */}
          <div className="flex bg-gray-200 p-1 rounded-lg mb-8">
            <button 
              onClick={() => setDeliveryType('delivery')}
              className={`flex-1 py-3 text-center font-medium rounded-md transition-all ${
                deliveryType === 'delivery' 
                  ? 'bg-orange-500 text-white shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Delivery
            </button>
            <button 
              onClick={() => setDeliveryType('pickup')}
              className={`flex-1 py-3 text-center font-medium rounded-md transition-all ${
                deliveryType === 'pickup' 
                  ? 'bg-orange-500 text-white shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Pick up
            </button>
          </div>

          {/* Special Instructions */}
          <div className="mb-8">
            <label className="block text-lg font-medium text-gray-900 mb-3">Special Instructions for Restaurant</label>
            <textarea 
              rows={4}
              placeholder="E.g no onion, food is too spicy, food is too hot..."
              className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none text-gray-700"
            ></textarea>
          </div>

         
          {/* Checkout Button */}
                    <button 
                    onClick={() => navigate('/account')}   
                className="w-full bg-orange-500 text-white py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition shadow-md"
                >
               Proceed to Checkout
                </button>

        </div>
      </main>

      {/* 3. FOOTER  */}
      <footer className="w-full bg-[#5C4033] text-white py-16 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h4 className="text-xl font-serif italic text-orange-400">Chuks Kitchen</h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.
            </p>
            <p className="text-xs text-gray-400 pt-10">© 2020 Lift Media. All rights reserved.</p>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-bold text-lg mb-1">Quick Links</h4>
            <a href="#" className="text-sm text-gray-300 hover:text-orange-400">Home</a>
            <a href="#" className="text-sm text-gray-300 hover:text-orange-400">Explore</a>
            <a href="#" className="text-sm text-gray-300 hover:text-orange-400">My Order</a>
            <a href="#" className="text-sm text-gray-300 hover:text-orange-400">Account</a>
            <a href="#" className="text-sm text-gray-300 hover:text-orange-400">Contact</a>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-bold text-lg mb-1">Contact Us</h4>
            <p className="text-sm text-gray-300">+234 801 234 5678</p>
            <p className="text-sm text-gray-300">hello@chukskitchen.com</p>
            <p className="text-sm text-gray-300">123 Taste Blvd, Lagos, Nigeria</p>
          </div>

          {/* Socials */}
          <div className="flex flex-col space-y-3">
            <div className="h-6"></div> 
            <a href="#" className="text-sm text-gray-300 hover:text-orange-400">Facebook</a>
            <a href="#" className="text-sm text-gray-300 hover:text-orange-400">Twitter</a>
            <a href="#" className="text-sm text-gray-300 hover:text-orange-400">Linkedin</a>
            <a href="#" className="text-sm text-gray-300 hover:text-orange-400">Instagram</a>
          </div>
        </div>
        
        {/* Scroll Top Button */}
        <div className="flex justify-end mt-10">
          <button 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            className="bg-blue-500 p-3 rounded-full hover:bg-blue-600 transition shadow-lg"
          >
            <ArrowUp size={24} className="text-white" />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default OrderSummaryPage;