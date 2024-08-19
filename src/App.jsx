import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddContactPage from './pages/AddContactPage';
import EditContactPage from './pages/EditContactPage';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/add" element={<AddContactPage />} />
                <Route path="/edit/:id" element={<EditContactPage />} />
            </Routes>
        </div>
    );
};

export default App;


