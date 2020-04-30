import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './sign-in.styles.scss'

class SignIn extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = (event) =>{
        event.preventDefault()

    }

    handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I Already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" label="email" type="email" value={this.state.email} handleChange={this.handleChange} required />
                    <FormInput name="password" label="password" type='password' value={this.state.password} handleChange={this.handleChange} required />
                    

                    <CustomButton type="submit" value="login" > SIGN IN </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn