import { useState } from "react"
import { users } from "../../data/dataUsers"
import Header from "../../components/Header"
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {
    const [getUser, setUser] = useState('Jaime Zapata')
    const [getPassword, setPassword] = useState('')
    let redireccion = useNavigate()
    console.log(users[0])
    function login() {
        if (buscarUsuario()) {
            let timerInterval;
            Swal.fire({
                title: "Auto close alert!",
                icon: 'success',
                html: "Será redireccionado en <b></b> milliseconds.",
                timer: 1000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                    const timer = Swal.getPopup().querySelector("b");
                    timerInterval = setInterval(() => {
                        timer.textContent = `${Swal.getTimerLeft()}`;
                    }, 100);
                },
                willClose: () => {
                    clearInterval(timerInterval);
                    redireccion('/dashboard')
                }
            }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log("I was closed by the timer");
                }

            });
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Usuario y/o contraseña incorrecto',
                icon: 'error',
                confirmButtonText: 'Cerrar'
            })
        }
    }
    function buscarUsuario() {
        let auth = users.some((user) => getUser == user.email && getPassword == user.password)
        return auth
    }

    return (
        <section className="sectionLogin">
            <Header />
            <form>
                <section>
                    <label htmlFor="">Usuario</label>
                    <input value={getUser} onChange={(e) => setUser(e.target.value)} type="email" />
                </section>
                <section>
                    <label htmlFor="">Contraseña</label>
                    <input value={getPassword} onChange={(e) => setPassword(e.target.value)} type="password" />
                </section>
                <button onClick={login} type="button">Iniciar Sesión</button>
            </form>
        </section>

    )
}
export default Login