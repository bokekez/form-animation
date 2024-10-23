import { Route, Routes } from 'react-router-dom';
import LineGraph from '../components/LineGraph';
import Graph from '../components/Graph';
import CursorFollower from '../components/CursorFollower';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/animation" element={<CursorFollower />} />
      <Route path="/graph" element={<LineGraph />} />
      <Route path="/graph2" element={<Graph />} />
    </Routes>
  );
};

export default AppRoutes;
