import React from 'react'
import { useState,useEffect } from 'react';
const data = {
    "form": {
        "sections": [
            {
                "order": 1,
                "section_title": "Personal Details",
                "fields": [
                    {
                        "name": "name",
                        "label": "Name",
                        "required": true,
                        "type": "Integer",
                        "html_element": "textbox"
                    },
                    {
                        "name": "email",
                        "label": "Email",
                        "hidden": false,
                        "required": true,
                        "type": "String",
                        "html_element": "email"
                    },
                    {
                        "name": "phone",
                        "label": "Phone",
                        "required": true,
                        "type": "number",
                        "minLength":"10",
                        "maxLength":"10",
                        "html_element": "textbox"
                    },
                    {
                        "name": "age",
                        "label": "Age",
                        "hidden": false,
                        "options": [],
                        "required": true,
                        "type": "number",
                        "html_element": "number"
                    },
                    
                ]
            }
        ]
    }
}

export default function JsForm() {
    const onSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted")
    }
    const onChange =(e) => {
            
           const formValue= e.target.value;
            console.log(formValue);

        
    }
    return (
        <div className="container">
            <form className="form-outer" onSubmit={onSubmit} onChange={onChange}>
                    {
                        data.form.sections.map(formData => {
                            console.log("formData", formData)
                            return(
                                    <div>
                                        <h1>{formData.section_title}</h1>
                                        {
                                            formData.fields.map(inputData => {
                                                console.log("inputData", inputData)
                                                return(
                                                    <div>
                                                        <label>{inputData.label}</label>
                                                        <input type={inputData.html_element} name={inputData.name} required={inputData.required} datatype={inputData.type} minLength={inputData.minLength} maxLength={inputData.maxLength}/>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                            )
                        })
                    }
                <button type="onSubmit">Submit</button>        
            </form>
        </div>
    )
}