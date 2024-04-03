import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const Inventory: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="galery flex justify-center">
                <div className="p-4 mt-2 mb-6  border-b-2 border-t-2  border-black text-center">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 ">
                        {[...Array(12)].map((_, index) => (
                            <div key={index}>
                                <img
                                    className="w-36 h-auto max-w-full rounded-lg"
                                    src={`https://flowbite.s3.amazonaws.com/docs/gallery/square/image-${index + 1}.jpg`}
                                    alt={`Image ${index + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Inventory;
