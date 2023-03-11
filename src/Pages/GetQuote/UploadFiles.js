import React from 'react';

const UploadFiles = () => {
    return (
        <div className='uppercase'>
            <h1>Send us your 3d models</h1>
            <div className='border-dashed border-2 border-red-400 w-46 h-28 flex justify-center items-center'>
                <input type="file" className="file-input file-input-bordered file-input-error w-full max-w-xs" />
            </div>
        </div>
    );
};

export default UploadFiles;