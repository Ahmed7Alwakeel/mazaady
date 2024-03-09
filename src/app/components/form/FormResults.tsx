'use client'

import { useSelector } from "react-redux";

const FormResults = () => {
    const {formData}=useSelector((state:any)=>state.formData) 
    console.log(formData)
    return (
        <div className="form-results-table">
            Enter
        </div>
    );
}

export default FormResults;