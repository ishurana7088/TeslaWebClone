import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Vehicles from './navComponents/Vehicles'
import Energy from './navComponents/Energy'
import Charging from './navComponents/Charging'
import Discover from './navComponents/Discover'
import Shop from './navComponents/Shop'
import OrdersPage from './OrdersPage'

const Routing = () => {
  return (
    <div>
          <Routes>
            <Route path="/home" element={<Vehicles/>} />
            <Route path="/energy" element={<Energy></Energy>}></Route>
            <Route path="/charging" element={<Charging></Charging>}></Route>
            <Route path="/discover" element={<Discover></Discover>}></Route>
            <Route path="/shop" element={<Shop></Shop>}></Route>
            <Route path="/orders" element={<OrdersPage></OrdersPage>}></Route>
          </Routes>
    </div>
  )
}

export default Routing
