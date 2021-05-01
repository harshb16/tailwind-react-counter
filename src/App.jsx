import Container from './components/Container';
import Counter from './components/Counter';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <Container className='h-screen space-y-8 bg-gray-900'>
      <Header />
      <Counter />
      <Footer />
    </Container>
  );
};

export default App;
