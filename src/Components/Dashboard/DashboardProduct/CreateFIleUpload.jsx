import React from 'react';
import { IoMdClose } from 'react-icons/io';

const CreateFileUpload = ({ onchange, files, onRemove }) => {
    return (
        <div className="space-y-4">
            {/* File Upload Area */}
            <div className="flex items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                <label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full h-full">
                    <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                    </svg>
                    <p className="text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    <input id="file-upload" type="file" className="hidden" multiple onChange={onchange} />
                </label>
            </div>

            {/* Uploaded Files Display */}
            <div className="flex flex-wrap gap-4">
                {files.length > 0 ? (
                    files.map((fileUrl, index) => (
                        <div key={index} className="relative flex items-center bg-white p-2 border border-gray-200 rounded shadow-sm">
                            <img src={fileUrl} alt={`Uploaded file ${index}`} className="w-16 h-16 object-cover rounded" />
                            <IoMdClose
                                className="absolute top-1 right-1 text-xl text-red-500 cursor-pointer"
                                onClick={() => onRemove(fileUrl)}
                            />
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No files uploaded.</p>
                )}
            </div>
        </div>
    );
};

export default CreateFileUpload;
