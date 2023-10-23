import React from 'react'
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-3"> <span className="text-danger">Opps!</span> Pagina non trovata.</p>
                <p className="lead">
                    La pagina che hai cercato non esiste.
                </p>
                <Link to={"/"} className="btn btn-primary">Vai alla Home</Link>
            </div>
        </div>
    )
}

export default NotFound