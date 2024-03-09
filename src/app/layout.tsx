
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import "./styles/app.scss"
import Navbar from "./components/layout/Navbar"
import InnerLayout from "./InnerLayout"

const inter = Inter({ subsets: ["latin"] })

const regular = localFont({
	src: [{ path: "./../../public/fonts/Nunito-Regular.ttf" }],
	variable: "--regular",
})

const bold = localFont({
	src: [{ path: "./../../public/fonts/Nunito-SemiBold.ttf" }],
	variable: "--bold",
})

export const metadata: Metadata = {
	title: "Mazaady",
	description: "Mazaady website",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={`${regular.variable} ${bold.variable}`}>
			<body className={inter.className}>
			<InnerLayout>
				<div className="layout">
					<Navbar />
					{children}
				</div>
			</InnerLayout>
			</body>
		</html>
	)
}
