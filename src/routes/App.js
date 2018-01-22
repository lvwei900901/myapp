import { BrowserRouter } from 'react-router-dom';
import MainLayout from './MainLayout';
import { connect } from 'dva';

function App() {
  return (
    <BrowserRouter>
        <MainLayout />
    </BrowserRouter>
  );
}

export default connect()(App);
