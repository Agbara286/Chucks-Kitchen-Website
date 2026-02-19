import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Phone, CheckSquare, Square, ArrowUp } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-grow flex-col lg:flex-row w-full h-full">
        
        {/* LEFT SIDE */}
        <div className="hidden lg:flex w-1/2 relative bg-orange-500 items-center justify-center text-white overflow-hidden">
          <div className="absolute inset-0">
             <img 
               src="/assets/trueminds_innovations/Rectangle 1-1.png"
               alt="Family Eating" 
               className="w-full h-full object-cover opacity-30 mix-blend-multiply" 
             />
             <div className="absolute inset-0 bg-orange-600/60 mix-blend-multiply" />
          </div>
          <div className="relative z-10 px-16 text-center">
            <h2 className="text-5xl font-bold mb-6">Chuks Kitchen</h2>
            <p className="text-xl leading-relaxed font-medium">
              Your journey to delicious, authentic Nigerian meals starts here. 
              Sign up or log in to order your favorites today!
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/2 bg-[#F9F9F9] flex flex-col justify-center items-center p-8 md:p-12">
          <div className="w-full max-w-md space-y-6">
            
            <div className="text-center">
              <h1 className="text-2xl font-serif italic text-orange-500 font-bold mb-2">Chuks Kitchen</h1>
              <h2 className="text-3xl font-bold text-gray-900">Create Your Account</h2>
            </div>

            <form className="space-y-4 mt-6">
              
              {/* Email */}
              <div>
                <label className="text-sm font-medium text-gray-600">Email</label>
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="email" placeholder="name@gmail.com" className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-500 focus:border-orange-500" />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm font-medium text-gray-600">Phone number</label>
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="tel" placeholder="8123340690" className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-500 focus:border-orange-500" />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="text-sm font-medium text-gray-600">Password</label>
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type={showPassword ? "text" : "password"} placeholder="QWE123#" className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-500 focus:border-orange-500" />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                  </div>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="text-sm font-medium text-gray-600">Confirm password</label>
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="password" placeholder="QWE123#" className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-500 focus:border-orange-500" />
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-center cursor-pointer" onClick={() => setAgreed(!agreed)}>
                <div className={`mr-2 ${agreed ? 'text-blue-500' : 'text-gray-400'}`}>
                  {agreed ? <CheckSquare size={20} /> : <Square size={20} />}
                </div>
                <span className="text-sm text-gray-600">
                  I agree to the <a href="#" className="text-blue-500">Terms & Conditions</a> and <a href="#" className="text-blue-500">Privacy Policy</a>
                </span>
              </div>

              <button
                type="button"
                onClick={() => navigate('/explore')}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-bold text-white bg-orange-500 hover:bg-orange-600 transition"
              >
                Continue
              </button>
            </form>

            <div className="relative mt-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#F9F9F9] text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                 <img className="h-5 w-5 mr-2" src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" />
                 Continue with Google
              </button>
              <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                <img className="h-5 w-5 mr-2" src="https://www.svgrepo.com/show/448234/facebook.svg" alt="Facebook" />
                Continue with Apple
              </button>
            </div>

            <p className="mt-2 text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/signin" className="font-medium text-blue-500 hover:text-blue-400">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
      
      
      {/* FOOTER */}
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

export default SignUpPage;