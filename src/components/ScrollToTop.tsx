'use client';
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  
  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`${
        isVisible ? 'block' : 'hidden'
      } fixed bottom-4 right-4 bg-transparent border border-pink-600 dark:text-white text-slate-950 rounded-full p-2 transition duration-300 hover:bg-gray-700 hover:text-gray-200`}
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default ScrollToTop;

