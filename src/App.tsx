import Header from './components/Header'
import {Routes, Route} from 'react-router-dom'
import { Products } from './pages/Products'
import { Categories } from './pages/Categories'
import { Basket } from './pages/Basket'

function App() {
  return (
    <>
      <Header />
      <main>
       {/* 
      /products
      /products/id
       /categories
       /categories/id
       /basket
       */}
<Routes>
<Route path='/products' element={<Products/>}/>
<Route path='/products/id' element={<h1>Hi</h1>}/>
<Route path='/categories' element={<Categories/>}/>
<Route path='/categories/id' element={<h1>Hi</h1>}/>
<Route path='/basket' element={<Basket/>}/>

</Routes>



      </main>
    </>
  )
}

export default App
