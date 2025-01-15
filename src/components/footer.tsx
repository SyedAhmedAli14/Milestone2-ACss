import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <h2>Copyright © 2024 Syed Ahmed Ali Shah ®. All rights reserved.</h2>
      <ul className="footer-links">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about-us">About</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact</Link>
        </li>
      </ul>
    </footer>
  );
}