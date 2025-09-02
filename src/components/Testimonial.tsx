import { Heart, Quote } from 'lucide-react'
import React from 'react'

const Testimonial = () => {
    const user = [
        {
            id: 1,
            name: "Read Janina's review, London",
            desc: "Isabelle was a wonderful host. Everything was as described in a profile: clean and nice..."
        },
        {
            id: 2,
            name: "Read Janina's review, London",
            desc: "Staying with Juan was a pleasure both him and Nati were friendly and relaxed and made y..."
        },
        {
            id: 3,
            name: "Read Janina's review, London",
            desc: "My partner and I had the pleasure of being hosted by Anahita and her husband for 5 week..."
        }
    ]
    return (
        <div className='w-full py-16 px-4'>
            <div className='max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center'>
                {
                    user.map((item) => (
                        <div key={item.id} className='flex gap-2'>
                            <div className='relative w-16 h-8 bg-orange-500 rounded-full'>
                                <Quote size={16} color="#1c79f2" strokeWidth={3} className='absolute  -top-3 -right-1' />
                            </div>
                            <div>
                                <p className='text-gray-600 italic'>{item.desc}</p>
                                <div className="flex gap-2 my-1">
                                    {Array.from({ length: 4 }).map((_, i) => (
                                        <Heart key={i} size={16} color="#f41095" strokeWidth={3} />
                                    ))}
                                </div>
                                <h1 className='text-sm text-blue-800'>{item.name}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Testimonial
