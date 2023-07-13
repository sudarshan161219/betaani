import {Routes, Route} from "react-router-dom"
import  {BrowsingTab, Categories, Contact, SubmitIdeas, Mainpage} from "./components/export"


const App = () => {
  return (
    <Routes>
    <Route path='/' element= {<Mainpage />}/>
    <Route path='/browse' element= {<BrowsingTab/>}/>
    <Route path='/categories' element= {<Categories/>}/>
    <Route path='/contact' element= {<Contact/>}/>
    <Route path='/submitideas' element= {<SubmitIdeas/>}/>
  </Routes>
  )
}

export default App