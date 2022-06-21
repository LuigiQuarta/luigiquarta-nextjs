import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <ol>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/cv">CV</Link></li>
      </ol>
    </nav>
  )
};

export default Navigation;
