import Link from 'next/link';
import StudentInfo from "./StudentInfo";

export default function Home() {
  return (
    <main>
      <h1 class="text-4xl">CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <p>
        <Link href="/week2">Week 2</Link>
      </p>
    </main>
  );
}