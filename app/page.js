import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col items-center py-8 bg-gray-900 min-h-screen text-white">
      <h1 className="text-4xl font-extrabold text-white mb-10 tracking-wider">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <ul className="space-y-5">
        <li>
          <Link
            href="\week-2"
            className="text-xl text-gray-300 hover:text-purple-400 transition-colors duration-200 transform hover:scale-105"
          >
            Week 2
          </Link>
        </li>
        <li>
          <Link
            href="\week-3"
            className="text-xl text-gray-300 hover:text-purple-400 transition-colors duration-200 transform hover:scale-105"
          >
            Week 3
          </Link>
        </li>
        <li>
          <Link
            href="\week-4"
            className="text-xl text-gray-300 hover:text-purple-400 transition-colors duration-200 transform hover:scale-105"
          >
            Week 4
          </Link>
        </li>
        <li>
          <Link
            href="\week-5"
            className="text-xl text-gray-300 hover:text-purple-400 transition-colors duration-200 transform hover:scale-105"
          >
            Week 5
          </Link>
        </li>
        <li>
          <Link
            href="\week-6"
            className="text-xl text-gray-300 hover:text-purple-400 transition-colors duration-200 transform hover:scale-105"
          >
            Week 6
          </Link>
        </li>
        <li>
          <Link
            href="\week-7"
            className="text-xl text-gray-300 hover:text-purple-400 transition-colors duration-200 transform hover:scale-105"
          >
            Week 7
          </Link>
        </li>
        <li>
          <Link
            href="\week-8"
            className="text-xl text-gray-300 hover:text-purple-400 transition-colors duration-200 transform hover:scale-105"
          >
            Week 8
          </Link>
        </li>
        <li>
          <Link
            href="\week-9"
            className="text-xl text-gray-300 hover:text-purple-400 transition-colors duration-200 transform hover:scale-105"
          >
            Week 9
          </Link>
        </li>
        <li>
          <Link
            href="\week-10"
            className="text-xl text-gray-300 hover:text-purple-400 transition-colors duration-200 transform hover:scale-105"
          >
            Week 10
          </Link>
        </li>
      </ul>
    </main>
  );
}
