import React from 'react'
import { useDispatch } from 'react-redux';
import { startLogin } from '../../actions/authActions';
import { useForm } from '../../hooks/useForm/useForm';
import './LoginScreen.css'

const LoginScreen = () => {

    const dispatch = useDispatch();

    const [loginValues, handleLoginChange, , handleLoginSubmit] = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const handleLogin = ({ email, password }) => dispatch(startLogin(email, password))

    const { email: lEmail, password: lPassword } = loginValues

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={e => handleLoginSubmit(e, handleLogin)}>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                name="email"
                                onChange={handleLoginChange}
                                value={lEmail}
                                placeholder="Correo"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                autoComplete="off"
                                name="password"
                                onChange={handleLoginChange}
                                value={lPassword}
                                placeholder="Contraseña"
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña" 
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña" 
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen
