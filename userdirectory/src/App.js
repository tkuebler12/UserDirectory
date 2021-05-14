import logo from './logo.svg';
import './App.css';
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import Table from './components/Table/Table';

function App() {
  return (
    <div className="App">
      <Container>
        <Header>User Directory</Header>
        <Table>Employees</Table>
        <Footer>My Project</Footer>
      </Container>
    </div>
  );
}

export default App;
