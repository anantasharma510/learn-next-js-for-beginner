import Link from "next/link";

export default function StudentList() {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        <li>
          <Link href="/studentlist/1">Aman</Link>
        </li>
        <li>
          <Link href="/studentlist/2">Samir</Link>
        </li>
        <li>
          <Link href="/studentlist/Ananta">Ananta</Link>
        </li>
      </ul>
    </div>
  );
}
