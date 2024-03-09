"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useSelector } from "react-redux"

const FormResults = () => {
	const { formData } = useSelector((state: any) => state.formData)
	const router = useRouter()

	useEffect(() => {
		!formData?.length && router.push("form")
	}, [formData, router])

	return (
		<div className="form-results-page">
			<h1>Search Results</h1>
			<div className="form-results-table">
				<div className="table-wrapper">
					{formData?.length && (
						<>
							<div className="table-header">
								{formData?.map(
									(item: any, index: number) =>
										item &&
										item.value != "" && (
											<div className="head" key={index}>
												{item.key}
											</div>
										)
								)}
							</div>
							<div className="table-header">
								{formData?.map(
									(item: any, index: number) =>
										item &&
										item.value != "" && (
											<div className="head" key={index}>
												{item.value}
											</div>
										)
								)}
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default FormResults
