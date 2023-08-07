import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function Booking() {
  return (
    <div>
      <h2>Movie Booked</h2>
      <br />
      <Link className="d-grid gap-2" to='/'>
        <Button size='lg'>Back To Home Page</Button>
      </Link>
    </div>
  )
}

export default Booking
