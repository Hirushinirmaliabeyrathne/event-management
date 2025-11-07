import Link from "next/link";


const Navbar = () => {
  return (
    <header className="w-full">
    <nav className="flex justify-end pr-10 py-4">
        <ul className="flex space-x-8">
        <Link href="/">Home</Link>
      <Link href="/events">Events</Link>
      <Link href="/createevents">Create Events</Link>
        </ul>
      
    </nav>
    </header>
    
  );
};

export default Navbar;
