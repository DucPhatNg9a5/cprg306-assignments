import Link from 'next/link';
import StudentInfo from "./StudentInfo";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl">CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <p>
        <Link href="/week2">Week 2</Link>
      </p>
      <p>
        <Link href="/week3">Week 3</Link>
      </p>
      <p>
        <Link href="/week4">Week 4</Link>
      </p>
      <p>
        <Link href="/week5">Week 5</Link>
      </p>
      <p>
        <Link href="/week6">Week 6</Link>
      </p>
      <p>
        <Link href="/week7">Week 7</Link>
      </p>
    </main>
  );
}