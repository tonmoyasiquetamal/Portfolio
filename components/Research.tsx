import React from 'react'
import Image from 'next/image'

interface Props {
  research: Array<{ Name: string; Image: string }>;
}

export default function Research({research}: Props) {
    return (
        <section id='books' className='px-4 max-w-6xl mx-auto py-4 my-14'>
            <h1 className="text-2xl mb-14 md:m-0 md:text-3xl md:text-left md:p-5 text-center font-bold text-gray-800">Research</h1>
            <div className='flex flex-wrap p-8 bg-white rounded-3xl'>
            {research.map((research, index) => (
          <div
            key={index}
            className="w-80 mx-auto flex flex-col items-center justify-center gap-4"
          >
            <Image
              className="hover:scale-110 duration-500"
              height={200}
              width={200}
              src={research.Image}
              alt={research.Name}
            />
            <p className="text-lg font-semibold">{research.Name}</p>
          </div>
        ))}
            </div>
        </section>
      )
}
