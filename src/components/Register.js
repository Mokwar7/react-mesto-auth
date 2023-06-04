import React from "react";
import '../index.css';
import { NavLink } from "react-router-dom";

function Register({onSubmit}) {
    const [formValue, setFormValue] = React.useState({
        email: '',
        password: '',
    })



    function handleChange(e) {
        const {name, value} = e.target

        setFormValue({
            ...formValue,
            [name]: value
        })
    }
    function handleSubmit(e) {
        e.preventDefault()
        onSubmit(formValue)
    }



    return(
        <section className="sign-in">
            <h2 className="sign-in__header">Регистрация</h2>
            <form className="sign-in__form" noValidate name='sign-up' onSubmit={handleSubmit}>
                <input className="sign-in__input" type="email" name='email' id='email' placeholder="Email" required value={formValue.email || ''} onChange={handleChange} lang='en'></input>
                <input className="sign-in__input" type="password" name='password' id='password' placeholder="Пароль" required value={formValue.password || ''} onChange={handleChange}></input>
                <button type='submit' className="sign-in__submit-button">Зарегистрироваться</button>
            </form>
            <NavLink to='/sign-in' className='sign-in__redirect'>Уже зарегистрированы? Войти</NavLink>
        </section>
    )
}

export default Register