import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, Plus } from 'lucide-react';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
        <nav className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl text-indigo-600 hover:text-indigo-700 transition">
              <Home className="w-6 h-6" />
              <span>CRUD Simples</span>
            </Link>
            <Link
              to="/new"
              className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition font-medium text-sm"
            >
              <Plus className="w-4 h-4" />
              Novo Usuário
            </Link>
          </div>
        </nav>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/new" element={<UserPage />} />
            <Route path="/edit/:id" element={<UserPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
