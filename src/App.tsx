import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/sections/WelcomePage';
import SignInPage from './components/sections/SignInPage';
import ExplorePage from './components/sections/ExplorePage';
import OrdersPage from './components/sections/OrdersPage';
import AccountPage from'./components/sections/AccountPage'
import SignUpPage from './components/sections/SignUpPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="explore" element={<ExplorePage />} />
       <Route path="/orders" element={<OrdersPage />} />
       <Route path="/account" element={<AccountPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;

