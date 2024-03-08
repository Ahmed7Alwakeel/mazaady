"use client"

import QRCard from "./QRCard"
import UserCard from "./UserCard"

const User = () => {
	return (
		<section className="home-user-container">
			<UserCard />
			<QRCard />
		</section>
	)
}

export default User
