import React, { useEffect,useState } from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
const PhotosComp = ({list})=>{
    const [images, setImages] = useState([]);
    useEffect(() => {
        let imglist = [];
        list.forEach(image => {
            let temp = {
                original: image.src,
                thumbnail: image.msrc,
                originalAlt: image.altText,
                thumbnailAlt: image.altText
            };
            imglist.push(temp);
        });
        setImages(imglist);
    }, [list])
    return(
        <div >
               <ImageGallery items={images} style={{maxHeight:'50vh'}} lazyLoad={true} infinite={true}/>
        </div>
    )
}
export default PhotosComp;