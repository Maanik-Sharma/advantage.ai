// src/components/Sidebar.jsx
import React from 'react';

const Sidebar = () => {
    return (
        <div className="w-64 h-screen bg-gray-100 p-4">
            <h2 className="text-xl font-bold mb-4">Services</h2>
            <ul>
                <li className="mb-2">
                    <a href="#" className="text-blue-600">Text Summarizer</a>
                </li>
                {/* Add more services here */}
            </ul>
        </div>
    );
};

export default Sidebar;