import Link from 'next/link';
import Image from 'next/image';
import { arrayPorto } from '../../Data/Portofolio';

type Params = {
    id: string;
}

export default function ProjectDetail({ params }: { params: Params }) {
    const { id } = params;
    const porto = arrayPorto.find(p => p.id === parseInt(id));
    console.log(id)

    if (!porto) return <div>Project not found</div>;


    return (
        <div className="container mx-auto p-4">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <Link href="/Portofolio" className="inline-block mb-6 text-soft-brown hover:underline">
                    ← Back to Portfolio
                </Link>
                <p className='font-semibold text-sm text-soft-brown'>{porto.category}</p>
                <h1 className="text-2xl font-bold text-white">{porto.name}</h1>
                <p className="mb-4">{porto.description}</p>
                <Image
                    alt={porto.name}
                    src={porto.image}
                    width={500}
                    height={50}
                    className=""
                    unoptimized />
            </div>
        </div>
    );
}
