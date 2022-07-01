import React, {useEffect} from 'react'
import {useAppContext} from "../../context";
import {useForm} from 'react-hook-form';
import {Navigate} from "react-router-dom";

const Statistics = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {adminRole, setAdminRole} = useAppContext();

    if (adminRole) {
        return (<Navigate to="/admin"/>)
    }

    const submit = (credentials) => {
        fetch('http://localhost:8000/admin')

        let errorField = document.getElementById("errorFieldAdmin");
        const toSend = {id:1 ,logged: 1};
        if (credentials.login == "admin" && credentials.password == "admin") {
            errorField.innerText = '';
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(toSend)
            };

            fetch("http://localhost:8000/admin", requestOptions)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        console.log(response.statusText)
                    }
                })
                .then(data => {
                    if (data) {
                        setAdminRole(true)
                        window.location.reload();
                    } else {
                        console.log("SERVER ERROR - submit()");
                    }
                })
        } else {
            errorField.innerText = "Wrong Credentials";
        }
               
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit(submit)}>
                <input {...register('login')} type="text" placeholder="Login" required/>
                <div className="error">{errors.login?.message}</div>
                <input {...register('password')} type="password" placeholder="password" required/>
                <div className="error">{errors.password?.message}</div>
                <button className="zalAdmin" value="Zaloguj">Zaloguj</button>
                <button className="resAdmin" value="Reset" type="reset">Reset</button>
                <div id="errorFieldAdmin"/>
            </form>
        </div>
    )
}

export default Statistics
