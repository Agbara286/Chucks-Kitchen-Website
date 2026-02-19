import React from 'react';
import { Search, ShoppingCart, Menu } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom'; 

const ExplorePage: React.FC = () => {
  const navigate = useNavigate();

  // Static Categories
  const categories = [
    { id: 1, name: "Jollof Delights", img: "/assets/trueminds_innovations/image 3.png" },
    { id: 2, name: "Swallow & Soups", img: "/assets/trueminds_innovations/image 2.png" },
    { id: 3, name: "Grills & BBQ", img:  "/assets/trueminds_innovations/Property 1=Variant10.png" },
    { id: 4, name: "Sweet Treats", img:  "/assets/trueminds_innovations/Property 1=Variant4.png" },
    { id: 5, name: "Jollof Delights", img:  "/assets/trueminds_innovations/image 4.png" },
    { id: 6, name: "Jollof Delights", img:  "/assets/trueminds_innovations/image 9.png" },
  ];

  // Static Chef's Specials
  const specials = [
    { id: 1, name: "Spicy Tilapia Pepper Soup", price: "₦3,500", img: "/assets/trueminds_innovations/Property 1=Variant4.png"},
    { id: 2, name: "Jollof Rice & Fried Chicken", price: "₦3,500", img: "/assets/trueminds_innovations/Property 1=Variant5.png" },
     { id: 3, name: "Jollof Rice & Fried Chicken", price: "₦3,500", img: "/assets/trueminds_innovations/Property 1=Variant5.png" },
      { id: 4, name: "Jollof Rice & Fried Chicken", price: "₦3,500", img: "/assets/trueminds_innovations/Property 1=Default.png" },
      { id: 5, name: "Jollof Rice & Fried Chicken", price: "₦3500", img: "/assets/trueminds_innovations/Property 1=Variant5.png" },
     { id: 6, name: "Egusi Soup & Pounded Yam", price: "₦3500", img:  "/assets/trueminds_innovations/Property 1=Variant6.png"  },
  ];

  return (
    <div className="bg-[#FDFDFD] min-h-screen font-sans">
      
      {/*  NAVBAR */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
        <h1 
          className="text-xl font-serif italic text-orange-600 font-bold cursor-pointer"
          onClick={() => navigate('/')} 
        >
          Chuks Kitchen
        </h1>
        
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 font-medium text-gray-600">
          <Link to="/" className="hover:text-orange-600 transition">Home</Link> 
          <Link to="/explore" className="text-orange-600 border-b-2 border-orange-600 pb-1">Explore</Link>
          <Link to="/orders" className="hover:text-orange-600 transition">Orders</Link>
          <Link to="/account" className="hover:text-orange-600 transition">Account</Link>
        </div>

        {/* Icons & Login */}
        <div className="flex items-center space-x-4">
          <ShoppingCart 
            className="text-gray-600 cursor-pointer hover:text-orange-600 transition" 
            onClick={() => navigate('/orders')} 
          />
          
          <div className="bg-orange-500 p-2 rounded-full text-white md:hidden cursor-pointer">
            <Menu size={20} />
          </div>
          
          <button 
            onClick={() => navigate('/signin')} 
            className="hidden md:block bg-orange-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-orange-600 transition"
          >
            Login
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative h-[450px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src= "/assets/trueminds_innovations/Onboarding/Welcome.png" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Nigerian Food Banner" 
        />
        <div className="relative z-20 text-center text-white px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">The Heart of Nigerian Home Cooking</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8">Handcrafted with passion, delivered with care.</p>
          
          {/* SEARCH BAR */}
          <div className="relative max-w-2xl mx-auto">
        <input 
    type="text" 
    placeholder="What are you craving for today?" 
    
    className="w-full py-4 px-12 bg-white rounded-full text-gray-900 shadow-2xl focus:outline-none focus:ring-2 focus:ring-orange-500"
  />
  <Search className="absolute left-4 top-4 text-gray-400" size={24} />
</div>
        </div>
      </header>

      {/* POPULAR CATEGORIES */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h3 className="text-2xl font-bold text-center mb-10">Popular Categories</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden cursor-pointer group">
              <img src={cat.img} className="h-40 w-full object-cover group-hover:scale-105 transition duration-300" />
              <div className="p-4 text-center font-bold text-gray-800">{cat.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CHEF'S SPECIALS */}
      <section className="max-w-7xl mx-auto py-12 px-6">
        <h3 className="text-2xl font-bold text-center mb-10">Chef's Specials</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specials.map((item) => (
            <div key={item.id} className="bg-white border border-gray-100 rounded-3xl p-4 shadow-sm hover:shadow-md transition">
              <img src={item.img} className="w-full h-48 object-cover rounded-2xl mb-4" />
              <h4 className="font-bold text-lg mb-1">{item.name}</h4>
              <p className="text-sm text-gray-500 mb-4 text-ellipsis">A classic Nigerian favorite prepared with fresh local ingredients.</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-orange-600 text-lg">{item.price}</span>
                <button 
                  onClick={() => navigate('/orders')} 
                  className="bg-orange-500 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-orange-600 transition"
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#5C4033] text-white py-16 px-8 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <h4 className="text-xl font-serif italic text-orange-400">Chuks Kitchen</h4>
            <p className="text-sm text-gray-300 leading-relaxed">Bringing the authentic flavors of Nigerian home cooking to your table.</p>
            <p className="text-xs text-gray-400 mt-6 pt-4 border-t border-white/10">© 2024 UI Media. All rights reserved.</p>
          </div>

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

          <div className="space-y-4">
            <h4 className="font-bold text-lg">Contact Us</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>+234 811 234 5678</li>
              <li>hello@chukskitchen.com</li>
              <li>123 Taste Blvd, Lagos, Nigeria</li>
            </ul>
          </div>

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
      </footer>
    </div>
  );
};

export default ExplorePage;