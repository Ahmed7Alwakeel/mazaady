import { FormikProps } from "formik"
import fetchData from "../utils/FetchData"

export class Category {

	static async getData () {
		const req = await fetchData.get(`get_all_cats`)
		return req
	}

	static async getProperties(id: string) {
		const req = await fetchData.get(`properties?cat=${id}`)
		return req
	}
	static async getOptionsChild(id: string) {
		const req = await fetchData.get(`get-options-child/${id}`)
		return req
	}

	static handleCategorySelect = (
		e: IOptions,
		formik: FormikProps<any>,
		setState: ([]) => {}
	) => {
		formik.setFieldValue("category", { id: e.value, value: e.label })
		const subCategory = e?.children?.map((item: any) => {
			return {
				value: item.id,
				label: item.name,
			}
		})
		setState([...(subCategory as IOptions[])])
	}

	static handleSubCategorySelect = async (
		e: IOptions,
		formik: FormikProps<any>,
		setState: ([]) => {}
	) => {
		formik.setFieldValue("subCategory", { id: e.value, value: e.label })
		const props = await Category.getProperties(e.value)

		const data: any = []
		props.data.data?.map((item: any) => {
			data.push({
				name: item?.name,
				data: item?.options.map((option: any) => ({
					label: option?.name,
					value: option?.name,
					id: option?.id,
				})),
			})
		})

		setState([...data])
	}
}
