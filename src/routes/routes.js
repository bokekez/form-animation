import { Route, Routes } from 'react-router-dom';
import LineGraph from '../components/LineGraph';
import CursorFollower from '../components/CursorFollower';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/animation" element={<CursorFollower />} />
      <Route path="/graph" element={<LineGraph />} />
    </Routes>
  );
};

export default AppRoutes;
