import React from 'react'
import { CiCamera } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'
import { useUploadImgMutation } from '../../../redux/api'
import toast from 'react-hot-toast'

const Profile = ({  row, setRow, image, setImage }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [sendImage, { data, error }] = useUploadImgMutation()
    console.log(data, error);


    const navigate = useNavigate()
    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        console.log(file);

        if (file) {
            const formData = new FormData();
            formData.append('image', file);
            const response = await sendImage(formData).unwrap();
            if (response.file && response.file.location) {
                setImage(response.file.location);
                toast.success('File uploaded successfully');
            }
        }
    }

    return (
        <div className='lg:pr-8 lg:my-0 my-8'>
            <div className='relative w-[200px] h-[200px] bg-gray-500 flex justify-center items-center rounded-full'>
                <img className='[clip-path:circle(50%)] w-full h-full object-cover' src={user.user_img} alt="User Image" />
                <div className='absolute bottom-[9%] right-[5%] text-2xl text-black cursor-pointer'>
                    <input onChange={(e) => handleFileChange(e)} type="file" style={{ display: 'none' }} id="fileInput" />
                    <div className='rounded-full bg-gray-500 p-1.5'>
                        <CiCamera onClick={() => document.getElementById('fileInput').click()} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile