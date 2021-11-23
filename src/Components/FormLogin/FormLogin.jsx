import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './FormLogin.css'
import  Loader  from '../Loader/Loader'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux'
import  sendData  from '../../Redux/Actions/actionsComponents'
import { Formik, Form, Field, ErrorMessage } from 'formik';

function FormLogin() {


    
    const [isLoading, setIsLoading] = useState(false)

    const history = useHistory()

    const pushHome = () => {

        history.push('/Home')
        
        setIsLoading(false)

    }

    //Function onSubmit, post petition
    const sendValues = (values) => {

        sendData(values.email, values.password, setIsLoading)

        setTimeout(pushHome, 2000)

    }



    return (
        <Formik

        initialValues={{
            email: '',
            password: '',

        }}

        validate={(values) => {
            let errors = {}

            //Email validation
            if (!values.email) {
                errors.email = 'please submit a email'
            } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
                errors.email = 'Please submit a correct email'
            }

            //Password validation
            if (!values.password) {
                errors.password = 'please submit a password'
            } else if (values.password.length < 4 || values.password.length > 20) {
                errors.password = 'Please submit a correct password'
            }

            return errors;

        }}

        onSubmit={(values) => {
            sendValues(values)
        }}
    >
        {({ errors }) => (

        <div className="form-container">

            {
                isLoading ? (
                    <div className="container contact-form" style={{height: "500px"}}>
                    <div className="contact-image">
                        <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
                    </div>
                        <Loader />
                    </div>
                ) : (

                    <div className="container contact-form">
            <div className="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
            </div>
            <h1 className="text-center">Log In</h1>
            <Form>
                
                <h3>Json Placeholder</h3>
               <div className="row">
                    <div className="col-md-12">
                        <div className="form-group" style={{margin: "10px auto"}}>

                            <Field    
                                type="email"
                                placeholder="Example: challenge@gmail.com"
                                id="email"
                                name="email"
                                className="form-control" 
                                />

                            <ErrorMessage name="email"  component={() => (
                            <span className="text-danger text-center">
                                {errors.email}
                            </span>
                        )} />
                        </div>
                        <div className="form-group" style={{margin: "10px auto"}}>
                            <Field  
                                type="password"
                                placeholder="Password"
                                id="password"
                                name="password"
                                className="form-control"
                             />
                            <ErrorMessage name="password" component={() => (
                            <span className="text-danger">
                                {errors.password}
                            </span>
                        )} />
                   
                        </div>
        
                        <div className="form-group text-center" style={{margin: "10px auto"}}>
                            <Button type="submit" name="btnSubmit" className="btnContact">Submit</Button>
                        </div>
                    </div>
        
                </div>
            </Form>
</div>                 
                )
            }
            
           
          </div>  
        )}
    </Formik>
        
    )
}

export default FormLogin
