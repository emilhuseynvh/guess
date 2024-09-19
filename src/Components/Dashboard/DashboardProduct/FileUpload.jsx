import React from 'react';
import { IoMdClose } from 'react-icons/io';

const FileUpload = ({ onchange, UploadedFiles, onRemove }) => {



    return (
        <>
            <div className="flex items-center justify-center w-full">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashboardBtn border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-transparent hover:bg-gray-900 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16" >
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" multiple onChange={onchange} />
                </label>
            </div>

            <div className="mt-4 flex">
                <div className="mt-4 flex">
                    {UploadedFiles && UploadedFiles.length > 0 ? (
                        UploadedFiles.map((item, i) => (
                            <div key={i} className="relative flex items-center bg-transparent p-2 mb-2 rounded">
                                <img src={item} alt={`Uploaded file ${i}`} className="w-16 h-16 object-cover mr-4 rounded" />
                                <IoMdClose className="absolute right-6 top-2 text-xl cursor-pointer text-red-500" onClick={() => onRemove(item)} />
                            </div>
                        ))
                    ) : (
                        <p>No files uploaded.</p>
                    )}
                </div>

            </div>
        </>
    );
};

export default FileUpload;

