import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './App.css'
import * as React from "react";

export default function DeleteAccount() {
    const form = useRef<HTMLFormElement>(null)
    const [submitted, setSubmitted] = useState(false)

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_94g7ckr',
                'template_bfvfw7m',
                form.current!,
                {
                    publicKey: 'QY1VxTSLuLC1glh4L',
                }
            )
            .then(
                () => {
                    console.log('SUCCESS!')
                    setSubmitted(true)
                },
                (error) => {
                    console.error('FAILED...', error.text)
                }
            )

        emailjs
            .sendForm(
                'service_94g7ckr',
                'template_8if0lal',
                form.current!,
                {
                    publicKey: 'QY1VxTSLuLC1glh4L',
                }
            )
            .then(
                () => {
                    console.log('SUCCESS!')
                    setSubmitted(true)
                },
                (error) => {
                    console.error('FAILED...', error.text)
                }
            )

        setSubmitted(true)
    }

    return (
        <div className="delete-container">
            <div className="delete-card">
                <h1 className="delete-title">Solicitud de eliminación de cuenta</h1>

                {!submitted ? (
                    <>
                        <p className="delete-text">
                            Esta acción eliminará <strong>permanentemente</strong> tu cuenta y todos los datos asociados, incluyendo historial, configuraciones y cualquier contenido generado.
                        </p>
                        <p className="delete-text">
                            Una vez que se elimine tu cuenta, <strong>no podrás recuperarla</strong>. Por favor, asegúrate de que deseas continuar.
                        </p>
                        <p className="delete-text">
                            Ingresa tu correo electrónico para confirmar la eliminación:
                        </p>

                        <form ref={form} onSubmit={sendEmail} className="delete-form">
                            <input
                                type="email"
                                name="user_email"
                                placeholder="tucorreo@ejemplo.com"
                                className="delete-input"
                                required
                            />
                            <button type="submit" className="delete-button">
                                Solicitar eliminación permanente
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="delete-success">
                        <h2 className="success-title">¡Solicitud recibida!</h2>
                        <p className="success-text">
                            Procesaremos tu solicitud en un plazo de 3 a 5 días hábiles. Todos los datos serán eliminados de forma irreversible.
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
