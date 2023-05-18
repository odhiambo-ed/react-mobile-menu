import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <header className='flex flex-row justify-between items-center p-3'>
        <h3 className='text-blue-600'>LOGO</h3>
        <Header />
      </header>
      <Footer />
    </div>
  );
}

export default App;
