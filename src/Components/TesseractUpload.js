import React, {useState} from 'react'
import Tesseract from 'tesseract.js'
import testphoto from '../Assets/finalworks.jpg'

const TessUpload = () => {

    const [imageText, setText] = useState("")
    const reg = ['Bandit','Cardiel', 'Hordin', 'Lordly Legionary', 'Rotos', 'Sethala', 'Lydia', 'Thrall']
    

    
    Tesseract.recognize(
        testphoto,
        'eng'
      ).then(({ data: { text } }) => {

      })


    return(
        <div>
            {imageText}
        </div>
    )
}

export default TessUpload