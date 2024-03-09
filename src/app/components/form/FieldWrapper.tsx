"use client"
import Select from "react-select"
import { ErrorMessage } from "formik"
import { selectStyle } from "@/app/utils/SelectStyle"

const FieldWrapper = ({
	options,
	inputPlaceholder,
	name,
	inputTouched,
	inputError,
	onChange,
}:ISelect) => {
	return (
		<div className={`field-wrapper-container`}>
				<Select
					options={options}
					name={name}
					placeholder={inputPlaceholder}
					className={`select-drop-down ${
						inputError && inputTouched && "input-error"
					}`}
					noOptionsMessage={() => `no options`}
					classNamePrefix="react-select"
					styles={selectStyle}
					onChange={onChange}
				/>
				<p className="error">
					<ErrorMessage name={name} />
				</p>
		</div>
	)
}

export default FieldWrapper
