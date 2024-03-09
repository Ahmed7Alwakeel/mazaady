interface IButton {
	text?: string
	icon?: string
	customClass?: string
	type?: "button" | "submit" | "reset"
}
interface IProduct {
	text: string
	image: string
	price: number
	tip: string
	day: number
	minuets: number
	hours: number
	isFavorite: boolean
}

interface IOptions {
	label: string
	value: string
	children?:[]
	data?:[]
	name?:string
	id?:string
}
interface ISelect {
	options: IOptions[]
	inputPlaceholder: string
	name: string
	inputTouched: boolean
	inputError: boolean
	onChange: (e: any) => void
}
