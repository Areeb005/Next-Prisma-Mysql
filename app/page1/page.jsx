import Image from 'next/image';

import axios from 'axios';

import img1 from '@/public/Images/grupne-konstelacije.webp'
import img2 from '@/public/Images/Individualne-konstelacije.webp'
import img3 from '@/public/Images/Individualne-supervizije.webp'
import img4 from '@/public/Images/Ljetni-intenziv.webp'
import img5 from '@/public/Images/Supervizijske-grupe.webp'

export default async function Page1() {

  const response1 = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const ABC = await response1.data;


  // function Call1() {
  //   API1()
  //     .then(items => {
  //       // setdata(items)
  //       return items
  //     })
  // }

  // function Call2() {
  //   API2()
  //     .then(items => {
  //       // setdata(items)
  //       return items
  //     })
  // }


  return <>

    <div className='mx-12'>

      <div className='mt-12'>
        <h1 className='text-4xl mt-5'>Images and Fetching and Rendering Data on Serverside</h1>
      </div>
      <div className='flex'>
        <div className='mt-12 mr-2'>
          <Image src={img1} alt='Tree Image' width={200} height={150} />
        </div>
        <div className='mt-12 mr-2'>
          <Image src={img2} alt='Tree Image' width={200} height={150} />
        </div>
        <div className='mt-12 mr-2'>
          <Image src={img3} alt='Tree Image' width={200} height={150} />
        </div>
        <div className='mt-12 mr-2'>
          <Image src={img4} alt='Tree Image' width={200} height={150} />
        </div>
        <div className='mt-12 mr-2'>
          <Image src={img5} alt='Tree Image' width={200} height={150} />
        </div>
      </div>

      <div className='mt-12'>
        <h3 className='text-2xl'>Data:</h3>
        <div>
          {
            ABC.map(e => {
              if (e.username) {
                return <p key={e.id}>{e.username}</p>
              } else {
                return <p key={e.id}>{e.title}</p>
              }
            })
          }
        </div>
      </div>

    </div>
  </>
}


