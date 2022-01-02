import { useState } from 'react';
import { portfolioContext } from './portfolioContext';

export function PortfolioProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <portfolioContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </portfolioContext.Provider>
  );
}
