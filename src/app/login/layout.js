'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Layout({ children }) {
    const pathName = usePathname();
    console.log(pathName); // Log the actual path name

    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">
            {pathName !== "/login/loginteacher" && (
                <nav className="bg-blue-600 text-white p-4">
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/login" className="hover:underline">
                                Login Main
                            </Link>
                        </li>
                        <li>
                            <Link href="/login/loginstudent" className="hover:underline">
                                Student Login
                            </Link>
                        </li>
                        <li>
                            <Link href="/login/loginteacher" className="hover:underline">
                                Teacher Login
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
            <main className="p-6">
                {children}
            </main>
        </div>
    );
}
