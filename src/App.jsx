import React from 'react'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Footer from './components/Footer'
import Routing from './components/Routing'
import OrdersPage from './components/OrdersPage'

const App = () => { 
  return (
    <div>
      
      <Navbar></Navbar>
      <Routing></Routing>
      {/* <OrdersPage></OrdersPage> */}
      <Products></Products>
      <Footer></Footer> 
         

           




    </div>
  )
}

export default App
