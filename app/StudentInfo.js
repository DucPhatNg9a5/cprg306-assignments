import Link from 'next/link';

export default function StudentInfo() {
    return (
      <ul>
        <li>
          <p>Name: Duc Nguyen</p>
          <p>Course section: CPRG 306 C</p>
          <Link href="https://github.com/DucPhatNg9a5/cprg306-assignments">https://github.com/DucPhatNg9a5/cprg306-assignments</Link>
        </li>
      </ul>
    );
  }