import React from 'react'
import { CiCamera } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'
import { useUploadImgMutation } from '../../../redux/api'
import toast from 'react-hot-toast'

const Profile = ({ user, row, setRow, image, setImage }) => {
    const [sendImage, {data, error}] = useUploadImgMutation()
    console.log(data, error);
    

    const navigate = useNavigate()

    const handleLogOut = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        navigate('/')
        location.reload()
    }
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
        <div className='md:border-r w-full md:w-1/4 flex flex-col items-center justify-center pr-8'>
            <div className='relative md:w-[150px] mb-4 w-[40%] mx-auto md:mx-0 sm:w-[100px] lg:w-[200px] '>
                <img className=' rounded-[70%] w-[200px] h-[210px]' src={user.user_img} alt="User Image" />
                <div className='absolute bottom-[9%] right-[5%] text-2xl text-black cursor-pointer'>
                    <input onChange={(e) => handleFileChange(e)} type="file" style={{ display: 'none' }} id="fileInput" />
                    <div className='rounded-[50%] bg-gray-500 p-1.5'>
                        <CiCamera onClick={() => document.getElementById('fileInput').click()} />
                    </div>
                </div>
            </div>
            <ul className='border-t pt-4 text-md'>
                <li onClick={() => setRow(null)} className='py-1 cursor-pointer hover:underline'>Contact Info</li>
                <li onClick={() => setRow(1)} className='py-1 cursor-pointer hover:underline'>Orders</li>
                <li onClick={() => setRow(2)} className='py-1 cursor-pointer hover:underline'>Change Password</li>
                <li onClick={() => handleLogOut()} className='py-1 cursor-pointer hover:underline'>Log out</li>
            </ul>
        </div>
    )
}

export default Profile