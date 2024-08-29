
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
       <Navbar className="bg-info">
        <Container>
          <Navbar.Brand href="" className='text-danger fw-bolder'>
          <Link style={{textDecoration:'none', color:'red'}} to={'/'}>
          <i className="fa-regular fa-circle-play fa-beat-fade"></i>
          <span> </span>
          Media-Player
          </Link>  
          
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
