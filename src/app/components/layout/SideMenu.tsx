import Link from "next/link"
import { usePathname } from "next/navigation"
import Buttons from "../common/Buttons"
import Image from "next/image"

const SideMenu = ({ openMenu }: any) => {
	const pathname = usePathname()
	return (
		<div className={`${!openMenu && "close"} side-menu-container`}>
			<div className="locale-section">
				<Image width={24} height={24} src={"/images/locale.svg"} alt="icon" />
			</div>
			<ul>
				<li>
					<Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
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
						className={`link ${pathname === "/form-results" ? "active" : ""}`}
						href="/"
					>
						Form Results
					</Link>
				</li>
			</ul>

			<Buttons text="Add New Product" icon="/images/add.svg" />
		</div>
	)
}

export default SideMenu
