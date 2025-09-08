import React from 'react'

const videos = [
    "https://www.youtube.com/embed/xSGLv4WJO9Q?si=GyHLef2G2aFHLlLB",
    "https://www.youtube.com/embed/xSGLv4WJO9Q?si=GyHLef2G2aFHLlLB",
    "https://www.youtube.com/embed/xSGLv4WJO9Q?si=GyHLef2G2aFHLlLB",
];

const Video = () => {
    return (
        <div className='w-full p-4 felx justify-center'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-500 mb-4 tracking-wider text-center'>
            Our Video Gallery
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {videos.map((url, i) => (
                    <div
                        key={i}
                        className="relative aspect-video rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
                    >
                        <iframe
                            className="w-full h-full"
                            src={url}
                            title={`YouTube video ${i + 1}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Video
