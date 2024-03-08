"use client"

import Image from "next/image"
import { useState } from "react"

const QRBox = () => {
	const [showCode, setShowCode] = useState(false)
	return (
		<div className="home-qr-card">
			<div className="title-container">
				<h2>QR Code</h2>
				<div className="icons-container">
					<Image width={20} height={20} alt={"icon"} src={"/images/eye.svg"} />
					<Image
						width={20}
						height={20}
						alt={"icon"}
						src={"/images/send-square.svg"}
					/>
					<Image
						width={20}
						height={20}
						alt={"icon"}
						src={"/images/document-download.svg"}
					/>
					<div className={`arrow-wrapper ${showCode&&"rotate"}`} onClick={() => setShowCode(!showCode)}>
						<Image
							className="arrow-icon"
							width={15}
							height={15}
							alt={"icon"}
							src={"/images/arrow-down.svg"}
						/>
					</div>
				</div>
			</div>
			<div className={`qr-section ${showCode&&"show"}`}>
				<div className="download-container">
					<Image
						width={20}
						height={20}
						alt={"icon"}
						src={"/images/document-download-or.svg"}
					/>
					<p>Download the QR code or share it with your friends.</p>
				</div>
				<div className="qr-container-wrapper">
					<div className="qr-container">
						<Image
							className="logo-image"
							src="/images/logo.svg"
							alt="logo"
							fill
							sizes=""
						/>
						<h3>Hala Ahmed</h3>
						<Image className="qr-image" alt="qr" src={"/images/qr.png"} fill />
						<p>Follow Us On Mazaady</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default QRBox
