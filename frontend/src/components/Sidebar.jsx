import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { VscHistory } from "react-icons/vsc";

import { Link } from 'react-router-dom'
const Sidebar = () => {
    return (
        <>

            <div className="bg-white sidebar mt-5 py-5 p-2">

                <div className="list-group list-group-flush">
                    <a className="list-group-item py-2 my-2">
                        <Link to="/" className='nav-link'>
                            <FaHome className="fs-5 me-2" />
                            <span className="fs-5">Home</span>
                        </Link>
                    </a>
                    <a className="list-group-item py-2 my-2">
                        <Link to="/Shorts" className='nav-link'>

                            <SiYoutubeshorts className="fs-5 me-2" />
                            <span className="fs-5">Shorts</span>
                        </Link>
                    </a>
                    <a className="list-group-item py-2 my-2">
                        <Link to="ManageProduct" className='nav-link'>
                            <VscHistory className="fs-5 me-2" />
                            <span className="fs-5">History</span>
                        </Link>
                    </a>

                </div>
            </div>

        </>
    )
}

export default Sidebar