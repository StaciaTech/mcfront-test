import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ReTable from 'rmpage/RmTable'
import TaskPage from './TaskPage'
export default function Layout() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<TaskPage />} />
        <Route path='/reimbursement' element={<ReTable />} />
      </Routes>
    </Router>
  )
}
