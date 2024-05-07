import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import banner from '../json/banner.json'

function Bannner() {
    return (
        <div>
            <Carousel
                className='banner'
                autoPlay
                interval={2000}
                showStatus={false}
                infiniteLoop
                dynamicHeight={true}
                centerMode={true}
                centerSlidePercentage={100}
            >
                {
                    banner.map((data, id) => {
                        return (
                            <div key={data.id}>
                                <img src={data.image} />
                            </div>
                        )
                    })
                }

            </Carousel>
        </div>
    )
}

export default Bannner