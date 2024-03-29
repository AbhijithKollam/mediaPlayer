import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Videocard from './Videocard'
import { getAllVideos } from '../services/allAPI'

function View({uploadVideoStatus}) {

  const [allVideo, setAllVideo] = useState([]);
  const [deleteVideoStatus,setDeleteVideoStatus] = useState(false);

  const getAllUploadedVideos = async () => {

    const response = await getAllVideos();
    const { data } = response;
    setAllVideo(data);

  }
  useEffect(() => {
    getAllUploadedVideos();
    setDeleteVideoStatus(false)
  }, [uploadVideoStatus,deleteVideoStatus])
  console.log("========All videos==========");
  console.log(allVideo);
  return (
    <>
      <Row>
        {
          allVideo.length > 0 ?
            allVideo.map((video) => (
              <Col sm={12} md={6} lg={4} xl={4} className='m-5'>
                <Videocard displayVideo={video} setDeleteVideoStatus={setDeleteVideoStatus}/>
              </Col>
            ))
            :
            <p>No Items To Display</p>

        }
      </Row>
    </>
  )
}

export default View