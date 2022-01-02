import { useState } from 'react';
import PortfolioContext from './portfolioContext';

export function PortfolioProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <PortfolioContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </PortfolioContext.Provider>
  );
}
