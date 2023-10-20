import React, { useEffect, useState } from 'react';

const Advertise = ({ brand }) => {

    const [loadedImg, setLoadedImg] = useState([]);
    const [brandImages, setBrandImages] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('/companies.json')
            .then(result => result.json())
            .then(data => {
                setLoadedImg(data);
                setLoading(false)

                const brandImages = data.find(brandImg => brandImg.name === brand);
                
                if (brandImages) {
                    setBrandImages(brandImages.photos);
                }
            })
    }, []);

    if (loading) {
        return <div className='h-[80vh] flex justify-center items-center'><span className="loading loading-dots loading-lg "></span></div>;
    }

    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={brandImages[0]} className="w-full h-[60vh]" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={brandImages[1]} className="w-full h-[60vh]" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={brandImages[2]} className="w-full h-[60vh]" />
                </div>

            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>

            </div>
        </div>
    );
};

export default Advertise;