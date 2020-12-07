import React from 'react'
import { useDispatch } from 'react-redux';
import { startLogin, startRegister } from '../../actions/authActions';
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

    const [registerValues, handleRegisterChanges, , handleRegisterSubmit, registerError] = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirm: ''
        },
        validateField: {
            password: ({ password }) => password.trim().length < 5,
            confirm: ({ confirm, password }) => confirm .trim() !== password.trim()
        }
    })

    const handleLogin = ({ email, password }) => dispatch(startLogin(email, password))

    const handleRegister = ({ email, password, name }) => {
        dispatch(startRegister(name, email, password))
    }

    const { email: lEmail, password: lPassword } = loginValues

    const { name: rName, email: rEmail, password: rPassword, confirm: rConfirm } = registerValues

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
                    <form onSubmit={e => handleRegisterSubmit(e, handleRegister)}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                placeholder="Nombre"
                                name="name"
                                value={rName}
                                onChange={handleRegisterChanges}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                autoComplete="off"
                                placeholder="Correo"
                                name="email"
                                value={rEmail}
                                onChange={handleRegisterChanges}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                autoComplete="off"
                                placeholder="Contraseña" 
                                name="password"
                                value={rPassword}
                                onChange={handleRegisterChanges}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                autoComplete="off"
                                placeholder="Repita la contraseña"
                                name="confirm"
                                value={rConfirm}
                                onChange={handleRegisterChanges}
                            />
                        </div>

                        {registerError && (
                            <div className="alert alert-danger">
                                Error, información no valida
                            </div>
                        )}

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
