"use client";

import Image from 'next/image';

import { API2 } from '@/api/api';
import axios from 'axios';

import img1 from '@/public/Images/grupne-konstelacije.webp'
import img2 from '@/public/Images/Individualne-konstelacije.webp'
import img4 from '@/public/Images/Ljetni-intenziv.webp'



export default function Page2() {


    function Call() {
        API2()
            .then(items => {
                // setdata(items)
                return items
            })
    }

    console.log(Call());

    return <>

        <div className='mx-12'>

            <div className='mt-12'>
                <h1 className='text-4xl mt-5'>Images and Fetching and Rendering Data on ClientSide</h1>
            </div>
            <div className='grid grid-cols-2'>
                <div>
                    <div className='mt-12 mr-2'>
                        <Image src={img1} alt='Tree Image' width={300} height={150} />
                    </div>
                    <div className='mt-12 mr-2'>
                        <Image src={img2} alt='Tree Image' width={300} height={150} />
                    </div>
                </div>
                <div>
                    <div className='mt-12 mr-2'>
                        <Image src={'/Images/Individualne-supervizije.webp'} alt='Tree Image' width={300} height={150} />
                    </div>
                    <div className='mt-12 mr-2'>
                        <Image src={img4} alt='Tree Image' width={300} height={150} />
                    </div>
                    <div className='mt-12 mr-2'>
                        <Image src={'/Images/Supervizijske-grupe.webp'} alt='Tree Image' width={300} height={150} />
                    </div>
                </div>
            </div>

            <div className='mt-12'>
                <h3 className='text-2xl'>Data:</h3>
                <div>
                    {
                        // ABC.map(e => {
                        //     if (e.username) {
                        //         return <p key={e.id}>{e.username}</p>
                        //     } else {
                        //         return <p key={e.id}>{e.title}</p>
                        //     }
                        // })
                    }
                </div>
            </div>

        </div>
    </>
}

