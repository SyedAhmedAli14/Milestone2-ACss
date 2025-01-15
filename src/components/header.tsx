import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="header-container">
      {/* Logo and Brand */}
      <div className="logo-container">
        <h1 className="brand-name">Sports Ahmed</h1>
      </div>

      {/* Navigation Bar */}
      <nav className="nav-bar">
        <ul className="nav-links">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about-us"}>About</Link>
          </li>
          <li>
            <Link href={"/contact-us"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}