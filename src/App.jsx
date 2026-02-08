import { Navbar } from './components/Navbar'
import { Home } from './sections/Home'

function App() {
  
  return (
    <main className='w-full min-h-screen mx-auto'>
      <div id='wrapper'>
        <div className='w-full flex justify-center fixed z-10'>
          <Navbar />
        </div>
        
        <Home />
      </div>
    </main>
  )
}

export default App
