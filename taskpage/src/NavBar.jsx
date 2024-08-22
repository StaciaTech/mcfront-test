import React from 'react'
import { NavLink } from 'react-router-dom'
export default function NavBar() {
  return (
    <div style={{ backgroundColor: '#4caf50', height: '3.5rem', 
      display: 'flex',
      columnGap: '1rem',
      alignItems: 'center'
    }} >
      <a href="/">Task page</a>
      <a href="/reimbursement">Rm page</a>
    </div>
  )
}
