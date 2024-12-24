'use client';
import { useRouter } from 'next/navigation';
import Link from "next/link";

const Login = () => {
  const router = useRouter(); 

  // Correctly defined navigate function
  const navigate = (page) => {
    router.push(`/login/${page}`); // Use template literals for dynamic paths
  };

  return (
    <div>
      <h1>Login</h1>
      {/* Correct Link usage */}
      <Link href="/">Home Page</Link>

      {/* Corrected button tags and router usage */}
      <button onClick={() => router.push('/login/loginstudent')}>Student Login</button>
      <button onClick={() => router.push('/login/loginteacher')}>Teacher Login</button>
      <button onClick={() => navigate('loginteacher')}>Navigate to Teacher Login</button>
    </div>
  );
};

export default Login;
