import './App.css';
import ReelSlotMachine from './components/ReelSlotMachine';

function App() {
  return (
    <>
      {/* Background */}
      <div className='grid place-items-center h-screen py-1p'>
        {/* Contents */}
        <div className='bg-sky-100 border-2 border-blue-300 rounded-xl p-2.5p'>
          
          {/* Title */}
          <h1 className='mb-5 font-serif text-4xl italic font-bold text-center text-sky-800'>
            Reel Slot Machine
          </h1>

          {/* Slot Machine */}
          <ReelSlotMachine />
          
        </div>

      </div>
    </>
  );
}

export default App;
