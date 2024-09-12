import Link from "next/link";
import NavLink from "./NavLink";
import BouncingIn from "./bounceIn";
import Arrow from "./arrow";

const workLink = <NavLink link='/work' linkName='work' />;
const aboutLink = <NavLink link='/about' linkName='about' />;
const labLink = <NavLink link='/lab' linkName='lab' />;
const homeLink = (
  <Link href='/' className='group mr-auto'>
    <Arrow direction='left' />
  </Link>
);

const bar = (
  <nav className='flex justify-end  space-x-5 p-5 rounded-lg bg-white'>
    <Link href='/' className='group mr-auto'>
      <Arrow direction='left' />
    </Link>
    <NavLink link='/work' linkName='work' />
    <NavLink link='/resume' linkName='resume' />
    <NavLink link='/lab' linkName='lab' />
  </nav>
);
export default function NavBar() {
  return <BouncingIn items={[bar]} />;
}
