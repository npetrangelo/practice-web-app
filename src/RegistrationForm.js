import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import App from "./App";

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            address: '',
            email: '',
            school: '',
            startDate: new Date(),
            status: '',
            payment: '',
        };
    }

    isValidName(name) {
        return new RegExp(" ^[a-zA-Z]*$").test(name);
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleDateChange = (date) => {
        this.setState({
            startDate: date
        });
    }

    handleSubmit = (event) => {
        let canSubmit = true;
        let message = "";
        if (!this.isValidName(this.state.firstName)) {
            canSubmit = false;
            message += "\nInvalid First Name: Must contain letters";
        }
        if (!this.isValidName(this.state.lastName)) {
            canSubmit = false;
            message += "\nInvalid Last Name: Must contain letters";
        }
        if (canSubmit) {
            alert('A first name was submitted: ' + this.state.firstName);
        } else {
            alert(message);
        }
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    First Name:
                    <input type="text" name='firstName' value={this.state.firstName} onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    Last Name:
                    <input type="text" name='lastName' value={this.state.lastName} onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    Address:
                    <input type="text" name='address' value={this.state.address} onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    Email:
                    <input type="text" name='email' value={this.state.email} onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    School:
                    <input type="text" name='school' value={this.state.school} onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    Date:
                    <DatePicker selected={this.state.startDate} onChange={this.handleDateChange} />
                </label>
                <br/>
                <label>
                    Status:
                    <input type="text" name='status' value={this.state.status} onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    Payment:
                    <input type="text" name='payment' value={this.state.payment} onChange={this.handleChange} />
                </label>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default RegistrationForm;