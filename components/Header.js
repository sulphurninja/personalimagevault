import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900">
      <div className="container mx-auto py-4 px-6 flex items-center justify-between">
        <div className="flex items-center">
          <svg
            className="h-6 w-6 text-white mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
          <h1 className="text-white text-lg font-semibold">Secret Photo Vault</h1>
        </div>
        <svg
          className="h-6 w-6 text-white cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 19v-1M19 10h1M15 10h1M9 10h1M5 10h1M12 10h1M12 14h1M12 19v1M5 14H4a2 2 0 01-2-2V8a2 2 0 012-2h16a2 2 0 012 2v4a2 2 0 01-2 2h-1"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
