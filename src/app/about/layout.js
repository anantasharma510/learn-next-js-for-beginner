import Link from 'next/link';

export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">
            <nav className="bg-blue-600 text-white p-4">
                <ul className="space-y-4">
                    <li>
                        <Link href="/about" className="hover:underline text-lg">
                            About Main
                        </Link>
                    </li>
                    <li>
                        <Link href="about/aboutstudent" className="hover:underline text-lg">
                            Go to About Student Page
                        </Link>
                    </li>
                    <li>
                        <Link href="about/aboutcollege" className="hover:underline text-lg">
                            Go to About College Page
                        </Link>
                    </li>
                </ul>
            </nav>
            <main className="p-6 bg-white shadow-lg rounded-lg mt-4">
                {children}
            </main>
        </div>
    );
}
