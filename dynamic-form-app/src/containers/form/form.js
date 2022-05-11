import React, { Component } from 'react';
import Field from '../../components/field/field';
class Form extends Component {
    state = {
        fields: [
            {
                id: 'name',
                type: 'input',
                placeholder: 'Enter name',
                config: {
                    dataType: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                errorMessage: 'Enter Valid data',
                touched: false
            },
            {
                id: 'street',
                type: 'textarea',
                placeholder: 'Enter Address',
                config: {
                    dataType: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                errorMessage: 'Enter Valid data',
                touched: false
            },
            {
                id: 'zipCode',
                type: 'input',
                placeholder: 'Enter zipcode',
                config: {
                    dataType: 'text',
                    placeholder: 'ZIP Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6,
                    maxLength: 6,
                },
                valid: false,
                errorMessage: 'Enter Valid data',
                touched: false
            },
            {
                id: 'country',
                type: 'select',
                placeholder: 'Enter country',
                config: {
                    dataType: 'text',
                    placeholder: 'Country'
                },
                options: [
                    {
                        value: 'USA',
                        displayValue: 'United state of america'
                    },
                    {
                        value: 'UK',
                        displayValue: 'United kingdom'
                    },
                    {
                        value: 'IN',
                        displayValue: 'India'
                    }
                ],
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                errorMessage: 'Enter Valid data',
                touched: false
            },
            {
                id: 'email',
                type: 'input',
                placeholder: 'Enter email',
                config: {
                    dataType: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                errorMessage: 'Enter Valid data',
                touched: false
            },
        ],
        formValid: false
    }
    fieldChange = (event, field, index) => {
        const updatedField = { ...field };
        updatedField.value = event.target.value;
        updatedField.valid = this.checkValidity(updatedField);
        const updatedFields = [...this.state.fields];
        updatedFields.splice(index, 1, updatedField);
        let formValid = true;
        for (let field of updatedFields) {
            if (!field.valid) {
                formValid = false;
            }
        }
        this.setState({
            fields: updatedFields,
            formValid: formValid
        })
    }

    checkValidity = (field) => {
        const rules = field.validation;
        const value = field.value;
        let isValid = true;
        if (!rules) {
            return true;
        }
    
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
    
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
    
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }
    
        if (rules.isEmail) {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            //const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }
     
     
    
        return isValid;
     }
    
    
    fieldBlur(event, field, index) {
        if (field.touched) {
            return;
        }
        const updatedField = { ...field };
        updatedField.touched = true;
        updatedField.valid = this.checkValidity(updatedField);
        const updatedFields = [...this.state.fields];
        updatedFields.splice(index, 1, updatedField);
        this.setState({
            fields: updatedFields,
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        alert('data submitted')
    }
    render() {
        return (<form onSubmit={(event) => this.onSubmit(event)}>
            {this.state.fields.map((field, index) => {
                return <Field
                    key={field.id}
                    fieldConfig={field}
                    blured={(event) => this.fieldBlur(event,field,index)}
                    changed={(event) => this.fieldChange(event,field,index)} />
            })}
             <button type='submit' onSubmit={this.checkValidity}>Submit</button>
        </form>)

    }
}
export default Form;