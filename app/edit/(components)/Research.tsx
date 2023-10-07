import React from 'react'
import Image from 'next/image'

interface Props {
  value: {
    Name: string;
    Profession: string;
    Bio: string;
    Image: string;
    Resume: string;
    Books: Array<{Name:string,Image:string}>;
    Skills: Array<{Name:string,Image:string}>;
    Projects: Array<{Name:string,Image:string}>;
    Research:Array<{Name:string,Image:string}>;
  };
  setValue: React.Dispatch<React.SetStateAction<{
    Name: string;
    Image: string;
    Profession: string;
    Bio: string;
    About: string;
    Resume: string;
    Books: {
        Name: string;
        Image: string;
    }[];
    Skills: {
        Name: string;
        Image: string;
    }[];
    Projects: {
        Name: string;
        Image: string;
    }[];
    Research: {
        Name: string;
        Image: string;
    }[];
}>>
}

export default function Research({value,setValue}: Props) {
    return (
        <section id='books' className='px-4 max-w-6xl mx-auto py-4 my-14'>
            <h1 className="text-2xl mb-14 md:m-0 md:text-3xl md:text-left md:p-5 text-center font-bold text-gray-800">Research</h1>
            <div className='flex flex-wrap p-8 bg-white rounded-3xl'>
                <div className='w-80 mx-auto flex flex-col items-center justify-center gap-4'>
                  <Image className='hover:scale-110 duration-500' height={200} width={200} src='/Tonmoy Asique Tamal.png' alt='' />
                  <p className='text-lg font-semibold'>Man for Woman</p>
                </div>
            </div>
        </section>
      )
}
