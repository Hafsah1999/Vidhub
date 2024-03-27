import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewProduct = () => {
  const { id } = useParams();





  const [videoList, setvideoList] = useState([]);
  const fetchUserData = async () => {
    const res = await fetch('http://localhost:5000/video/getbyid/' + id);
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setvideoList(data);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);




  return (
    <>
      {
        videoList !== null ? (

          <div className="container pt-24 px-16">
            <div className="row ">
            
              <div className="col-md-4 block m-auto">
                <video src={'http://localhost:5000/' + videoList.video} onClick={window.scrollTo(0, 0)} alt="" className="  img-fluid  w-100  " />

              </div>
              <div className="col-md-6">
              <h1 className=' fw-semibold fs-2 mt-3 mb-3' style={{ fontFamily: "serif" }}>{videoList.vidname}</h1>
                <p className='text-red-800 fs-5 fw-bold' style={{ fontFamily: "cursive" }}>{videoList.viddetail}</p>
                <p className='text-secondary mt-4 mb-4 fs-5' style={{ fontFamily: "serif" }}>{videoList.vidcategory}</p>

              </div>
            </div>







            <div className="row pt-24">
            </div>
          </div>


        ) : (
          <div>
            Loading
          </div>
        )
      }
    </>


  )
}


export default ViewProduct