import Link from 'next/link';
const Header = () => {
    return (
        <header className="bg-cyan-400 text-soft-brown py-5 px-10 sticky top-0 border-bottom border-cyan-700 shadow-2xl">
            <nav className="w-full px-6 flex justify-between m-2 items-center">
                <Link href="/" className="text-2xl font-bold">
                    Yahya
                </Link>
                <ul className="flex space-x-10 font-normal text-2xl">
                    <li>
                        <Link href="/About" className="hover:text-white ease-in-out rounded-xl hover:bg-cyan-300 px-3 py-3 hover:font-bold transform duration-300">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/Portofolio" className="hover:text-white  rounded-xl hover:bg-cyan-300  px-3 py-3 ease-in-out hover:font-bold transform duration-300">
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link href="/Blog" className="hover:text-white ease-in-out  rounded-xl hover:bg-cyan-300  px-3 py-3 hover:font-bold transform duration-300">
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;