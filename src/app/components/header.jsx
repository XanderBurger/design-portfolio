import Link from "next/link"
import NameLogo from "../assets/images/svgs/nameLogo.svg"
import NavLink from "./NavLink"


export default function Header() {


  return (
    <div className="grid border-b-[1px] border-solid border-black w-full h-[80px] grid-flow-col items-center">
        <div className="space-x-4 mx-[40px]"><Link href="/work"><NameLogo className="w-[148px] h-[33px]"/></Link></div>
        <div className="justify-self-end grid grid-flow-col items-center space-x-4 mx-[40px]">
        <NavLink link="/work" linkName="work"/>
          <NavLink link="/about" linkName="About"/>
          <NavLink link="/contact" linkName="contact"/>
        </div>
    </div>
  )
}
