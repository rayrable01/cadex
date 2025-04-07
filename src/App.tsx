import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './pages/Footer/Footer'
import { Header } from './pages/Header/Header'
import { Main } from './pages/Main/Main'
import { FormPage } from './pages/FormPage/FormPage'
import { SuccessForm } from './ui/SuccessForm/SuccessFrom'

function App() {

  return (
    <>
      <Header />
      <main className='main'>
        <Routes>
          <Route path="/cadex/" element={<Main />} />
          <Route path="/cadex/form" element={<FormPage />} />
          <Route path="/cadex/form/success" element={<SuccessForm />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
