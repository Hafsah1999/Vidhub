import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
const addProductSchema = Yup.object().shape({});

import toast from 'react-hot-toast';


const Addshorts = () => {


    const Navigate = useNavigate();
    const [selFile, setSelFile] = useState("");

    const addProductForm = useFormik({
        initialValues: {
            shortsname: "",
            shortsdetail: "",
            video: "",
        },

        onSubmit: async (values, action) => {
            values.video = selFile;
            console.log(values);
            const res = await fetch("http://localhost:5000/shorts/add", {
                method: "POST",
                body: JSON.stringify(values),
                headers: { "Content-type": "application/json" },
            });
            console.log(res.status);
            action.resetForm();
            if (res.status === 200) {
                toast("Item uploaded successfully")
                Navigate("/Shorts")
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
                    <label htmlFor="shortsname" className="mt-5 mb-2">shortsname</label>
                    <input
                        type="text"
                        name='shortsname'
                        onChange={addProductForm.handleChange}
                        value={addProductForm.values.shortsname}
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
                    <label htmlFor="shortsdetail" className="mb-2">shortsdetail</label>
                    <textarea
                        name="shortsdetail"
                        onChange={addProductForm.handleChange}
                        value={addProductForm.values.shortsdetail}
                        className="form-control mb-4"
                        required=''
                    />
                </div>

             
                <button type="submit" className="btn btn-success mb-5 w-25" >Add Shorts</button>


            </form>


        </>
    )
}


export default Addshorts