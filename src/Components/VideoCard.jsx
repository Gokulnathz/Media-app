
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addVideoHistoryAPI, deleteVideoAPI } from '../../services/allAPI';

function VideoCard({video,setDeleteVideoResponse,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () =>{setShow(true);
    const{name,link}=video
    let today= new Date()
    console.log(new Intl.DateTimeFormat('en-Us',{year:'numeric',month:"2-digit",day:'2-digit',hour:"2-digit",minute:'2-digit',second:'2-digit'}).format(today));
    let timeStamp=new Intl.DateTimeFormat('en-Us',{year:'numeric',month:"2-digit",day:'2-digit',hour:"2-digit",minute:'2-digit',second:'2-digit'}).format(today)
  
    let videoHistory={name,link,timeStamp}
    //make api call
    await addVideoHistoryAPI(videoHistory)
  } 
    const removeVideo = async(id)=>{
      await deleteVideoAPI(id)
      setDeleteVideoResponse(true)
    }
    const dragStarted=(e,id)=>{
      console.log('drag started' + id);
      e.dataTransfer.setData("videoId",id)
    }
    
  return (
    <div>
      <Card style={{ width: '15rem' }} draggable onDragStart={e=>dragStarted(e,video?.id)}>
      <Card.Img variant="top" onClick={handleShow} src={video?.url} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'><h3>{video?.name}</h3>
        {insideCategory?null:
        <Button className='btn bg-transparent' onClick={()=>removeVideo(video?.id)}><i className="fa-solid fa-trash text-danger"></i></Button>
        }</Card.Title>
        
        
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="315" src={`${video?.link}?autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></Modal.Body>
      </Modal>
      
    </div>
  )
}

export default VideoCard
