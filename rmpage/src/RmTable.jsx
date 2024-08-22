import React, { useEffect, useState } from 'react'
import './index.css'
export default function RmTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => setData(json))
  }, []);

  return (
    <div>
      <table>
        <thead>
          <th>userId</th>
          <th>title</th>
          <th>status</th>
        </thead>
        <tbody>
          {
            data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.completed.toString()}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
