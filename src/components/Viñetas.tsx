import React from 'react'
import Image from 'next/image';
import Bubble1 from './Bubble1';

const Viñetas = () => {
    return (
        <>
            <div className="container">
                <video className='viñeta1' width="1218" height="624" autoPlay controlsList="" loop>
                    <source src="/MEDIA_1_CONTENT.mp4" type="video/mp4" />
                </video>
                <div className='section2'>
                    <Image className='viñeta2' src="/IMAGE_3_CONTENT.png" alt="viñeta2" width="396" height="445" priority />
                    <video className='viñeta3' width="809" height="445" autoPlay controlsList="" loop>
                        <source src="/MEDIA_2_CONTENT.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className='section3'>
                    <video className='viñeta4' width="667" height="726" autoPlay controlsList="" loop>
                        <source src="/MEDIA_4_CONTENT_01.mp4" type="video/mp4" />
                    </video>
                    <div className='section4'>
                        <Image className='viñeta5' src="/Rectangle 5.png" alt="viñeta5" width="538" height="222" priority />
                        <video className='viñeta6' width="538" height="492" autoPlay controlsList="" loop>
                            <source src="/MEDIA_4_CONTENT_02.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Viñetas
