import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
const addProductSchema = Yup.object().shape({});

import toast from 'react-hot-toast';


const Addvideo = () => {


    const Navigate = useNavigate();
    const [selFile, setSelFile] = useState("");

    const addProductForm = useFormik({
        initialValues: {
            vidname: "",
            viddetail: "",
            vidcategory: "",
            video: "",
        },

        onSubmit: async (values, action) => {
            values.video = selFile;
            console.log(values);
            const res = await fetch("http://localhost:5000/video/add", {
                method: "POST",
                body: JSON.stringify(values),
                headers: { "Content-type": "application/json" },
            });
            console.log(res.status);
            action.resetForm();
            if (res.status === 200) {
                toast("Item uploaded successfully")
                Navigate("/")
            }
            else {
                toast("Something went wrong")
            }
        },
        validationSchema: addProductSchema,

    });

    const uploadFile = async (e) => {
        let file = e.target.files[0];
        setSelFile(file.name);
        const fd = new FormData();
        fd.append('myfile', file);

        const res = await fetch('http://localhost:5000/util/uploadfile', {
            method: 'POST',
            body: fd
        })
        console.log(res.status);
    }




    return (
        <>


            <form onSubmit={addProductForm.handleSubmit} className="mb-2 w-50 m-auto mt-5 ">
                <div className="form-group">
                    <label htmlFor="vidname" className="mt-5 mb-2">vidname</label>
                    <input
                        type="text"
                        name='vidname'
                        onChange={addProductForm.handleChange}
                        value={addProductForm.values.vidname}
                        className="form-control mb-3"
                        required=""
                    />
                </div>


                <div className="form-group">
                    <label htmlFor="videoUrl" className="mb-2"></label>
                    <input
                        type="file"
                        name="video"
                        onChange={uploadFile}
                        className="form-control mb-3"
                        required=''
                    />
                </div>


                <div className="form-group">
                    <label htmlFor="viddetail" className="mb-2">viddetail</label>
                    <textarea
                        name="viddetail"
                        onChange={addProductForm.handleChange}
                        value={addProductForm.values.viddetail}
                        className="form-control mb-4"
                        required=''
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="vidcategory" className="mb-2">vidcategory</label>
                    <textarea
                        name="vidcategory"
                        onChange={addProductForm.handleChange}
                        value={addProductForm.values.vidcategory}
                        className="form-control mb-4"
                        required=''
                    />
                </div>
                <button type="submit" className="btn  mb-5 w-25" >     Add Video</button>


            </form>


        </>
    )
}


export default Addvideo