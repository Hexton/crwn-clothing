import { Routes, Route } from 'react-router-dom';

import Home from './routers/home/home.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
};

export default App;
