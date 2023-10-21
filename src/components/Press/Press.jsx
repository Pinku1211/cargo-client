import React from 'react';

const Press = () => {
    return (
        <div className='mb-10 '>
            <h1 className='text-4xl font-bold text-center my-10'>Our Press Releases</h1>
            <div className='px-16 lg:px-24 grid grid-cols-1 text-black lg:grid-cols-3 gap-4'>
                <div className="card card-compact bg-base-100 mb-4 shadow-xl">
                    <figure><img className='w-full h-[350px]' src="https://i.ibb.co/C567h1p/1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p>Cargo Media Center --- </p>
                        <h2 className="card-title">Dialogue on future-oriented sustainability: Audi at the One Young World Summit</h2>
                        <p>To the press release</p>
                    </div>
                </div>
                <div className="card card-compact text-black bg-base-100 mb-4 shadow-xl">
                    <figure><img className='w-full h-[350px]' src="https://i.ibb.co/WHNL792/2.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p>MediaInfo --- </p>
                        <h2 className="card-title">Interview with Marc Lichte: “Sporty cars are adrenaline that has assumed a shape”</h2>
                        <p>To the press release</p>
                    </div>
                </div>
                <div className="card card-compact text-black bg-base-100 shadow-xl">
                    <figure><img className='w-full h-[350px]' src="https://i.ibb.co/2FQ99Rt/3.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p>MediaInfo --- </p>
                        <h2 className="card-title">BMW Sport GmbH: 40th anniversary insights</h2>
                        <p>To the press release</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Press;