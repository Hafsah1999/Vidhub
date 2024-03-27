import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import Sidebar from './Sidebar';


const Home = () => {






  const [videoList, setvideoList] = useState([]);
  const [masterList, setMasterList] = useState([]);

  const fetchVideoData = async () => {
    const res = await fetch('http://localhost:5000/video/getall');
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setvideoList(data);
      setMasterList(data);
    }
  };

  useEffect(() => {
    fetchVideoData();
  }, []);


  const filterproduct = (e) => {
    const value = e.target.value;
    setvideoList(masterList.filter((vid) => {
      return (vid.vidcategory.toLowerCase().includes(value.toLowerCase())),
        (vid.vidname.toLowerCase().includes(value.toLowerCase()))


    }))

  }




  const videoData = () => {
    if (videoList.length === 0) {
      return <h1 className='text-center fw-bold' style={{ color: "seagreen" }}>No Data Found</h1>
    }

    return videoList.map((vid) => (
      <>
        <div className='col-md-4 mt-4 '>
          <div className="card">
            {/* <Link to={`/Viewvideo/${vid._id}`} className='nav-link'> */}
              <video controls src={'http://localhost:5000/' + vid.video} alt="" className="card-img-top  img-fluid p-3" style={{ objectFit: "cover", height: "200px" }} />
              <div style={{ border: "none" }}>
                <h2 className=' fw-semibold fs-5 mt-3 ms-4 ' style={{ fontFamily: "serif" }}>{vid.vidname}</h2>
                <p className='text-secondary ms-4' style={{ fontFamily: "cursive" }}>{vid.vidcategory}</p>
              </div>
            {/* </Link> */}
          </div>
        </div>
      </>
    ))
  }

  return (

    <>
      <div className='py-3 bg-slate-100'>



        <div className="container-fluid">
          <div className="row  ">
            <div className="col-md-2">
              <Sidebar />
            </div>


            <div className="col-md-10">
              <form className="input-group mb-4 w-75 mx-auto" style={{borderRadius:"50px"}}>
                <input type="search" role="search" className="form-control search" style={{ fontFamily: "cursive",border:"1px solid black" }} placeholder='Search' onChange={filterproduct} />
                <button className="btn btn-outline-dark fs-5 fw-semibold search-btn" style={{ fontFamily: "serif" }}><IoSearch /></button>
              </form>
              <div className="row">
                {videoData()}
              </div>
            </div>
          </div>
        </div>


      </div>

    </>
  )
}

export default Home