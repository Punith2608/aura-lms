
import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';

const AppContent: React.FC = () => {
    const { user } = useAuth();
    const [isRegistering, setIsRegistering] = useState(false);

    if (!user) {
        if (isRegistering) {
            return <RegisterPage onSwitchToLogin={() => setIsRegistering(false)} />;
        }
        return <LoginPage onSwitchToRegister={() => setIsRegistering(true)} />;
    }

    return <DashboardPage />;
};


const App: React.FC = () => {
    return (
        <AuthProvider>
            <div className="bg-slate-50 min-h-screen">
                <AppContent />
            </div>
        </AuthProvider>
    );
};

export default App;
