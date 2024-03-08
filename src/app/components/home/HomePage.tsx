"use client"

import Products from "./Products"
import User from "./User"

const HomePage = () => {
	return (
		<div className="home-page-container">
			<User />
			<Products />
		</div>
	)
}

export default HomePage
