import Image from "next/image"

const ProductCard = ({
	text,
	image,
	price,
	tip,
	day,
	minuets,
	hours,
	isFavorite,
}: IProduct) => {
	return (
		<div className={`product-card-container`}>
            <div className="fav-icon-wrapper">
					<Image
						alt={text}
						src={isFavorite ? "/images/full-heart.svg" : "/images/heart.svg"}
						width={20}
						height={20}
						className="heart-img"
					/>
				</div>
			<div className="img-container">
				<Image alt={text} src={image} fill />
				<div className="tip">{tip}</div>
			</div>
			<div className="card-data">
				<p className="card-title">{text}</p>
				<p className="card-price">
					Starting Price <span>{price} EGP</span>
				</p>
				<div className="card-lot">
					<span>Lot Starts In</span>
					<div className="lots-container">
						<div>
							{day} <span>Days</span>
						</div>
						<div>
							{hours} <span>Hours</span>
						</div>
						<div>
							{minuets} <span>Minuets</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductCard
