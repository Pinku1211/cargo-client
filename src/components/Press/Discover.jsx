import React from 'react';

const Discover = () => {
    return (
        <div className="card lg:card-side mt-10 rounded-none px-16 lg:px-24">
            <figure className='flex-1'><img className='h-full' src="https://i.ibb.co/P5TdmjL/4.jpg" alt="Album" /></figure>
            <div className="card-body flex-1">
                <h2 className="card-title text-2xl">At 'Cargo' you’ll find the right vehicle for every requirement</h2>
                <p>Sporty, luxurious, or compact – at Audi you will find the right vehicle for every requirement. Discover and configure our series models now.</p>
                <div className="card-actions my-4">
                    <button className="w-fit outline-white p-2  hover:bg-[#ff6969] hover:text-white border border-[#ff6969] text-[#ff6969]">Discover All Models</button>
                </div>
                <p><small>Q4 Sportback e-tron:Power consumption (combined*) in kWh/100 km: 19.7–16.1CO₂ emissions (combined*) in g/km: 0
                    Information on fuel/power consumption and CO₂ emissions with ranges depending on the selected equipment of the vehicle.
                    Only consumption and emission values according to WLTP and not according to NEDC are available for the vehicle.</small></p>
            </div>
        </div>
    );
};

export default Discover;