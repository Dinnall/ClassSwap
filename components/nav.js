import Link from 'next/link'
import { redirectToEmail } from "../helper/index";


export default function Nav() {
  return (
    <nav>
      <ul className="flex justify-between items-center p-8">
        <li>
        <Link href="/">
            <a className="font-bold text-2xl lg:text-4xl" href="#">
              <span className="text-yellow-500 font-extrabold">Class</span>
              <span className="text-purple-900 font-extrabold">Swap</span>
            </a>
          </Link>
        </li>
        <ul className="flex justify-between items-center space-x-4">
          
        <li>
              <Link href="/viewclasses">
                  <a className="px-4 font-bold hover:text-gray-800" href="#">View Classes</a>
                </Link>
              </li>
              <li>
                <Link href="/listAclass">
                  <a className="px-4 font-bold hover:text-gray-800" href="#">List a Class</a>
                </Link>
              </li>
              <li>
                <a className="px-2 hover:text-gray-700 text-white bg-purple-900 font-bold rounded-full py-4 px-10 shadow-sm "
                  href={redirectToEmail()}>
                  Contact Us</a>
              </li>
        </ul>
      </ul>
    </nav>
  )
}
