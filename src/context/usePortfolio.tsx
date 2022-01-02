import { createContext, ReactNode, useContext, useState } from 'react';

interface PortfolioContextData {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => Promise<void>;
}

interface PortfolioProviderProps {
  children: ReactNode;
}

const PortfolioContext = createContext<PortfolioContextData>(
  {} as PortfolioContextData
);

export function PortfolioProvider({ children }: PortfolioProviderProps) {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  return (
    <PortfolioContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);

  return context;
}
