import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <p>This is the main app. Children below:</p>
      <Outlet />
    </div>
  );
}

export default App;
