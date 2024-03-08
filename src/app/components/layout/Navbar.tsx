"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import Buttons from "../common/Buttons"
import { useState } from "react"
import SideMenu from "./SideMenu"

const Navbar = () => {
	const pathname = usePathname()
	const [openMenu, setOpenMenu] = useState(false)
	return (
		<>
			<nav className="navbar-component">
				<div className="navbar-left-side">
					<div className="logo-menu-container">
						<Image
							src="/images/menu.svg"
							alt="logo"
							width={24}
							height={24}
							className="menu-icon"
							onClick={() => {
								setOpenMenu(!openMenu)
								document.body.classList.toggle("no-scroll")
							}}
						/>
						<div className="logo-container">
							<Image src="/images/logo.svg" alt="logo" fill sizes="" />
						</div>
					</div>
					<ul>
						<li>
							<Link
								className={`link ${pathname === "/" ? "active" : ""}`}
								href="/"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								className={`link ${pathname === "/form" ? "active" : ""}`}
								href="/form"
							>
								Form
							</Link>
						</li>
						<li>
							<Link
								className={`link ${
									pathname === "/form-results" ? "active" : ""
								}`}
								href="/"
							>
								Form Results
							</Link>
						</li>
					</ul>
				</div>
				<div className="navbar-right-side">
					<Image width={24} height={24} src={"/images/search.svg"} alt="icon" />
					<div className="line" />
					<Image
						width={24}
						height={24}
						src={"/images/notification.svg"}
						alt="icon"
					/>
					<div className="line" />
					<Image
						className="user"
						width={40}
						height={40}
						src={"/images/user-circle.png"}
						alt="user-circle"
					/>
					<Buttons text="Add New Product" icon="/images/add.svg" />
					<div className="locale-section">
						<Image
							width={24}
							height={24}
							src={"/images/locale.svg"}
							alt="icon"
						/>
						<div className="line" />
						<span>En</span>
					</div>
				</div>
			</nav>
			<SideMenu openMenu={openMenu} />
		</>
	)
}

export default Navbar
