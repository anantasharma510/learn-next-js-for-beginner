import Link from 'next/link';
export default function NotFound(){
    return(
        <div>
            <h1>404: about Page Not Found</h1>
            <Link href="/about">Go to about page</Link>
        </div>
    )
}