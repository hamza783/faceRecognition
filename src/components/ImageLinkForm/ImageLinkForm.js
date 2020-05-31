import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onSubmit}) => {
    return (
        <div>
            <p className='f3 white'>This app will detect faces in your picture</p>
            <div className='center'>
                <div className='form center br3 shadow-5 pa4'>
                    <input className='f4 w-80' type="text" placeholder="Enter url here" onChange={onInputChange}/>
                    <button className='f4 w-20 link grow white bg-purple' onClick={onSubmit}>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;