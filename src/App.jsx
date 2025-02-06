import { useState } from 'react'
import Header from './components/Header'
import HeroPanel from './components/HeroPanel'
import HowItWorks from './components/HowItWorks'
import Explore from './components/Explore'
import ClientsRiview from './components/clientsReviews'
import NewsArticle from './components/NewsArticle'
import SignUp from './components/SignUp'
import FooterMenu from './components/FooterMenu'
import FooterArea from './components/FooterArea'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=' w-[100%] h-[100vh] bg-slate-600 '>
      <Header/>
      <HeroPanel/>
      <HowItWorks/>
      <Explore/>
      <ClientsRiview/>
      <NewsArticle/>
      <SignUp/>
      <FooterMenu/>
      <FooterArea/>
      
    </div>
    </>
  )
}

export default App
