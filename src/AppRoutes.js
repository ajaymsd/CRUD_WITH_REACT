import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import App from './App'
import Add from './Add'
import Update from './Update'
import Delete from './Delete'
function AppRoutes() {
  return (
   <BrowserRouter>
     <Routes>
        
        <Route path="/" element={<App></App>}></Route>
        <Route path="/create" element={<Add></Add>}></Route>
        <Route path="/update/:id" element={<Update></Update>}></Route>
        <Route path="/delete/:id" element={<Delete></Delete>}></Route>
     </Routes>
   </BrowserRouter>
  )
}

export default AppRoutes