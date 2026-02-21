import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { Home, Plus } from 'lucide-react';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import { AuthProvider, AuthContext } from './contexts/AuthContext';
import { useContext } from 'react';

function App() {
  const { user, logout } = useContext(AuthContext);

  const Private = ({ children }) => {
      if (!user) return <Navigate to="/login" />;
      return children;
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
        <nav className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl text-indigo-600 hover:text-indigo-700 transition">
              <Home className="w-6 h-6" />
              <span>CRUD Simples</span>
            </Link>
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-gray-700">{user.name}</span>
                <Link
                  to="/new"
                  className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition font-medium text-sm"
                >
                  <Plus className="w-4 h-4" />
                  Novo Usuário
                </Link>
                <button onClick={logout} className="text-sm text-red-600 hover:underline">
                  Sair
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link to="/login" className="text-indigo-600 hover:underline">Entrar</Link>
                <Link to="/register" className="text-indigo-600 hover:underline">Cadastrar</Link>
              </div>
            )}
          </div>
        </nav>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />

            <Route
              path="/"
              element={
                <Private>
                  <HomePage />
                </Private>
              }
            />
            <Route
              path="/new"
              element={
                <Private>
                  <UserPage />
                </Private>
              }
            />
            <Route
              path="/edit/:id"
              element={
                <Private>
                  <UserPage />
                </Private>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
