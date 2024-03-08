"use client"

import { products } from "@/app/utils/FixedData"
import { useState } from "react"
import Buttons from "../common/Buttons"
import ProductCard from "./ProductCard"

const Products = () => {
	const [activeTab, setActiveTab] = useState(0)
	return (
		<div className="products-container">
			<div className="tabs-container-wrapper">
				<div className="tabs">
					{products.map((item, index) => (
						<div
							onClick={() => setActiveTab(index)}
							className={`${activeTab == index && "active"} tab`}
							key={index}
						>
							{item.tabName}
						</div>
					))}
				</div>
				<Buttons text="Add Review" icon="/images/add.svg" />
			</div>
			<div className="title">
				<h4>{products[activeTab].tabName}</h4>
				<span>{`( ${products[activeTab].tabData.length} )`}</span>
			</div>
			<div className="cards-container">
				{products[activeTab].tabData.map((product, index) => (
					<ProductCard
						key={index}
						text={product.text}
						image={product.image}
						price={product.price}
						tip={product.tip}
						day={product.day}
						minuets={product.minuets}
						hours={product.hours}
						isFavorite={product.isFavorite}
					/>
				))}
			</div>
		</div>
	)
}

export default Products
