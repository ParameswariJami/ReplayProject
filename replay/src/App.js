import React from 'react';
import ReactDOM from 'react-dom';
import SleeveSection from './Components/SleeveSection';
import CustomizationSection from './Components/CustomizationSection';
import ArtSection from './Components/ArtSection';
const App = () => {
  return (
    <div className="App">
      <SleeveSection />
      <CustomizationSection />
      <ArtSection />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
