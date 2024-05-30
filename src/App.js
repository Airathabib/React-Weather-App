import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { useCitiesList } from './hooks/useCitiesList';
import { ErrorBoundary } from './ErrorBoundary/withErrorBoundary';

import { Input } from './Input/Input';
import { CardList } from './CardList/CardList';
import { SingleCity } from './SingleCity/SingleCity';

import './App.css';

export const GlobalContext = React.createContext();

function App() {
  const [state, dispatch] = useCitiesList();
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <Routes>
        <Route
          path="/home"
          element={
            <div className="main">
              <Input />
              <ErrorBoundary>
                <CardList />
              </ErrorBoundary>
            </div>
          }
        />
        <Route path="/city/:city" element={<SingleCity />} />
      </Routes>
    </GlobalContext.Provider>
  );
}

export default App;
