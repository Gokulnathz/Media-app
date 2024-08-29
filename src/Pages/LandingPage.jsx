
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigateByUrl=useNavigate()
  return (
    <div>
      <Row className='mt-5 align-items-center justify-content-between w-100'>
        <Col></Col>
        <Col lg={5}>
        <h1 style={{color:'blueviolet',fontSize:'40px'}}>Welcome to <span className='text-warning'>Media-Player</span></h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio corporis officiis eius, deleniti corrupti praesentium similique. Sequi cumque nam aperiam voluptas fuga ratione, modi officiis expedita vero voluptatem qui officia.</p>
        <Button onClick={()=>navigateByUrl('/home')} className='btn btn-info'>Get Started</Button>
        </Col>
        <Col lg={5}>
        <img className='w-75 mt-4' src='https://i.pinimg.com/originals/60/a6/37/60a6370c7eb20418d83e930fd3dc19d7.gif' ></img>
        {/* <Image src='https://i.pinimg.com/originals/60/a6/37/60a6370c7eb20418d83e930fd3dc19d7.gif' roundedCircle></Image> */}
        </Col>
        <Col></Col>
      </Row>
      <div className="container mb-5 mt-5 d-flex flex-column align-items-center justify-content-center w-100">
        <h5 className='text-warning' style={{fontSize:'40px'}}>Features</h5>
        <div className='cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://i.pinimg.com/originals/0a/86/71/0a8671a21422eecab8189a2941bfb132.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
       
      </Card.Body>
    </Card>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://i.pinimg.com/originals/f9/fd/ee/f9fdee9073b6b6c4ade999a359fbd012.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
       
      </Card.Body>
    </Card>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://i.pinimg.com/originals/de/43/2d/de432d8cbf2650748a69a224f4f9d244.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
       
      </Card.Body>
    </Card>
        </div>
      </div>
    <div className="container border rounded p-4 border-light mt-5 d-flex align-items-center justify-content-center">
      <div className="col-lg-5">
        <h4 className='text-warning'>Simple, Powerful & Fast</h4>
        <h6 className='mb-5 mt-4'><span className='text-warning'>Play Everything</span>: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis id non debitis minima quia rem esse aut nihil omnis itaque voluptates maxime possimus iure, quos tempore ipsa nulla at aliquid! </h6>
        <h6 className='mb-5 mt-4'><span className='text-warning'>Categorize Videos</span>: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis id non debitis minima quia rem esse aut nihil omnis itaque voluptates maxime possimus iure, quos tempore ipsa nulla at aliquid! </h6>
        <h6 className='mb-5 mt-4'><span className='text-warning'>Managing Videos</span>: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis id non debitis minima quia rem esse aut nihil omnis itaque voluptates maxime possimus iure, quos tempore ipsa nulla at aliquid! </h6>
      </div>
      <div className="col-lg-5 ms-5">
      <iframe width="530" height="315" src="https://www.youtube.com/embed/Idh8n5XuYIA?si=jIKUBSAcv1_4-20s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
    </div>
  )
}

export default LandingPage
