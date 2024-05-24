import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import '../css/style.css'

function Headers() {
  return (
    <div>
      <Navbar
        style={{ height: '60px', backgroundColor: 'black', color: 'white' }}
      >
        <Container>
          <h3 className="text-light">E-Commerce</h3>
          <div id="ex4">
            <span className="p1 fa-stack fa-2x has-badge" data-count={1}>
              <FontAwesomeIcon icon={faCartShopping} />
            </span>
          </div>
        </Container>
      </Navbar>
      <br />
    </div>
  )
}

export default Headers
