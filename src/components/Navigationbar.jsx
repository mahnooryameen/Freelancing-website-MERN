import React from 'react'
import "./Navigationbar.scss"
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Navigationbar() {
  return (
    <>
      <div className="navbar d-flex flex-column">

        <div className="container">
          <div className="logo">
          {/* <Link to="/"> */}
            <span className='text '>Skillancer.</span>
          {/* </Link> */}
          </div>
          <div className="links">
            <span>Log in</span>
            <span>Become a Freelancer</span>
            <span>Explore</span>
            <span>English</span>
            <Button className='' variant="outline-primary">Register</Button>
          </div>
        </div>
<hr />
        <div className="d-flex justify-content-between container">
          
          <span>test1</span>
          <span>test2</span>
          <span>test3</span>
          <span>test4</span>
          <span>test5</span>
          <span>test6</span>
          <span>test7</span>
          <span>test8</span>
          <span>test9</span>
          <span>test10</span>
        </div>
      </div>

    </>
  )
}

export default Navigationbar