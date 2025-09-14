import Image from 'next/image';
import { ReactNode } from "react";
type Prop = {
    imageSource: string,
    name: string,
    children: ReactNode,
}

export default function card(prop: Prop) {
    return (
        <div className="w-full flex justify-center bg-cyan-500 p-10 gap-8">
            <div className="w-full flex flex-col border items-center md:w-80 p-5 rounded-small">
                <Image
                    alt="image1"
                    width={1000}
                    height={1000}
                    className="rounded-full"
                    src={prop.imageSource} />
                <strong className='text-3xl text-center text-soft-brown mt-5 text-semibold'>
                    {prop.name}
                </strong>
                <div className='font-thin text-center text-sm text-white mt-5'>
                    {prop.children}
                </div>
            </div>
        </div>
    )
}