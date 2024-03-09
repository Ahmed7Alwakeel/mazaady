import FormPage from "@/app/components/form/FormPage"

const getData = async () => {
	const res = await fetch("https://staging.mazaady.com/api/v1/get_all_cats", {
		method: "GET",
		headers: {
			Accept: "application/json",
			"Private-Key": `${process.env.PRIVATE_KEY}`,
		},
		cache: "force-cache",
	})
	if (!res.ok) {
		throw new Error("Failed to fetch data")
	}
	return res.json()
}

export default async function Form() {
	const data = await getData()
	return <FormPage data={data} />
}
