"use client"

import { Formik, Form, ErrorMessage, Field, FormikProps } from "formik"
import * as Yup from "yup"
import FieldWrapper from "./FieldWrapper"
import Buttons from "../common/Buttons"
import { useEffect, useState } from "react"
import { Value } from "sass"
import { Category } from "@/app/controllers/categories"
import { useDispatch } from "react-redux"
import { setFormData } from "@/app/store/formData"
import { useRouter } from "next/navigation"

const FormPage = ({ data }: any) => {
    const router=useRouter()
	const dispatch = useDispatch()
	const [categoriesOptions, setCategoriesOptions] = useState<IOptions[]>([])
	const [optionsWithChild, setOptionsWithChild] = useState<any[]>([])
	const [subCategoriesOptions, setSubCategoriesOptions] = useState<IOptions[]>(
		[]
	)
	const [selectedSubCategoryOptions, setSelectedSubCategoryOptions] = useState<
		IOptions[]
	>([])
	const validationSchema = Yup.object({
		category: Yup.mixed().required("Required"),
		subCategory: Yup.mixed().required("Required"),
	})

	useEffect(() => {
		const list: IOptions[] = []
		data.data.categories.map((item: any) => {
			list.push({
				value: item.id,
				label: item.name,
				children: item.children,
			})
		})
		setCategoriesOptions([...list])
	}, [data])

	const handleOptionSelect = async (e: IOptions) => {
		try {
			const props = await Category.getOptionsChild(`${e.id}`)
			const data: any = [...optionsWithChild]
			data.push({
				id: e.id,
				data: props.data.data[0].options.map((option: any) => ({
					label: option?.name,
					value: option?.name,
				})),
			})

			setOptionsWithChild([
				...new Map(data.map((item: any) => [item["id"], item])).values(),
			])
		} catch (error) {
			console.log("No options for that ID")
		}
	}

	return (
		<div className="form-page-container">
			<h1>Start Your Search!</h1>
			<Formik
				validateOnMount
				validationSchema={validationSchema}
				initialValues={{
					category: { id: 0, value: "" },
					subCategory: { id: 0, value: "" },
					option: { id: 0, value: "" },
				}}
				onSubmit={(values, { resetForm, setFieldValue }) => {
					dispatch(setFormData(values))
                    router.push('/form-results')
				}}
			>
				{(formik) => (
					<Form>
						<div className="inputs-wrapper">
							<FieldWrapper
								options={categoriesOptions}
								inputPlaceholder="Select Category"
								name="category"
								inputError={!!formik.errors.category}
								inputTouched={!!formik.touched.category}
								onChange={(e) =>
									Category.handleCategorySelect(
										e,
										formik,
										setSubCategoriesOptions as ([]) => {}
									)
								}
							/>
							<FieldWrapper
								options={subCategoriesOptions}
								inputPlaceholder="Select Sub Category"
								name="subCategory"
								inputError={!!formik.errors.subCategory}
								inputTouched={!!formik.touched.subCategory}
								onChange={(e) => {
									Category.handleSubCategorySelect(
										e,
										formik,
										setSelectedSubCategoryOptions as ([]) => {}
									)
								}}
							/>
							{categoriesOptions?.length > 0 &&
								selectedSubCategoryOptions.map((item, index) => (
									<>
										<FieldWrapper
											key={index}
											options={
												item.data
													? [...item.data, { label: "Other", value: "other" }]
													: [{ label: "Other", value: "other" }]
											}
											inputPlaceholder={`Select ${item?.name}`}
											name={item.name as "category"}
											inputError={false}
											inputTouched={false}
											onChange={(e) => {
												handleOptionSelect(e)
												item.name &&
													formik.setFieldValue(item.name, {
														value: e.value,
														id: e.id,
													})
											}}
										/>
										{item.name &&
											formik.values[item?.name as "option"]?.value ==
												"other" && (
												<Field
													placeholder={"Enter option"}
													name={`${item.name}-user-option` as "category"}
												/>
											)}
										{optionsWithChild.some(
											(child) =>
												child.id == formik.values[item?.name as "option"]?.id
										) && (
											<FieldWrapper
												key={index}
												options={
													optionsWithChild.find(
														(child: any) =>
															child.id ==
															formik.values[item?.name as "option"]?.id
													)?.data || []
												}
												inputPlaceholder={`Select ${item?.name} other options`}
												name={`${item.name}-child` as "category"}
												inputError={false}
												inputTouched={false}
												onChange={(e) => {
													handleOptionSelect(e)
													item.name &&
														formik.setFieldValue(`${item.name}-child`, e.value)
												}}
											/>
										)}
									</>
								))}
						</div>
						<div className="form-button">
							<Buttons text="Submit" type={"submit"} />
						</div>
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default FormPage
