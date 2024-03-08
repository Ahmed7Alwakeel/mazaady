"use client"

import Image from "next/image"
import Buttons from "../common/Buttons"
import { userTips } from "@/app/utils/FixedData"

const UserCard = () => {
	const tips = [{}]
	return (
		<div className="user-card-container">
			<Image fill alt="user" src={"/images/user-image.png"} className="user-image"/>
			<h1>Hala Ahmed</h1>
			<p className="user-info">
				I am Hala Ahmed, I am the owner of the local brand called Beauty which
				is for Mackeup and Skin Care.
			</p>
			<div className="user-tips">
				{userTips.map((item, index) => (
					<div className="tip" key={index}>
						<Image width={22} height={24} alt={item.text} src={item.icon} />
						<div className="tip-data">
                            <p>{item.number}</p>
                            <p>{item.text}</p>
                        </div>
					</div>
				))}
			</div>
			<Buttons text="follow" customClass="large-font" />
		</div>
	)
}

export default UserCard
