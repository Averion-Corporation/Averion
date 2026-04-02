import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { PressKitPage } from './pages/PressKitPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/press-kit" element={<PressKitPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
