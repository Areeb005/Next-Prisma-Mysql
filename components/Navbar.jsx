"use client";
import Link from 'next/link';
import Image from 'next/image';


import { Alert } from "flowbite-react";
import { Navbar } from "flowbite-react";


// To Add image throug URL you need to config the URL in next.config.js first.

// remotePatter: [
//     {
//         protocol: "https",
//         hostname: "flowbite.com"
//     },
//     add another ...
// ]

const Header = () => {
    return <>

        <Navbar
            fluid={true}
            rounded={false}
        >
            <Link href="/">
                <Image
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="mr-3 h-6 sm:h-9"
                    width={80}
                    height={50}
                    alt="Flowbite Logo"
                />

                <span className="text-blue-600 self-center whitespace-nowrap text-xl font-semibold">
                    Flowbite
                </span>

            </Link>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Link
                    href="/"
                    className='text-black'
                >
                    Home
                </Link>
                <Link href="/page1" className='text-black'>
                    Page1
                </Link>
                <Link href="/page2" className='text-black'>
                    Page2
                </Link>
                <Link href="/navbars" className='text-black'>
                    Page3
                </Link>
                <Link href="/navbars" className='text-black'>
                    Page4
                </Link>
            </Navbar.Collapse>
        </Navbar>
    </>
}

export default Header;