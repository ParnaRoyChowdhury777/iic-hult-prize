import React from 'react';

interface PopupProps {
    onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
    const handleClose = () => {
        if (typeof onClose === 'function') {
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white max-w-screen-lg w-full p-8 rounded-xl">
                <div className="flex justify-between items-center">
                    <h2 className="text-3xl font-semibold text-gray-900">Project Title</h2>
                    <button className="text-gray-500 hover:text-gray-700" onClick={handleClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                {/* Image Slider */}
                <div className="flex justify-center items-center mt-4">
                    {/* Add your image slider component here */}
                </div>
                {/* Changing Text Details */}
                <div className="mt-4">
                    <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et consequat ex. Nulla facilisi. Donec sodales euismod est, a commodo orci tempus eget.</p>
                    {/* You can dynamically change text details here */}
                </div>
            </div>
        </div>
    );
};

export default Popup;
