import { BrowserRouter as Router, Route} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MenuBar from './components/MenuBar';
import { Container } from 'semantic-ui-react';
import { AuthProvider } from './context/Auth';
import AuthRoute from './util/AuthRoute';

function App() {
  return (
    <AuthProvider>
          <Router>
      <Container>
      <MenuBar />
      <AuthRoute exact path='/' component={Home}/>
      <AuthRoute exact path='/login' component={Login}/>
      <AuthRoute exact path='/register' component={Register}/>
      </Container>
    </Router>
    </AuthProvider>
  );
}

export default App;
