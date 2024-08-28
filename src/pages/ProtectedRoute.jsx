import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function ProtectedRoute(props) {
    const navigate = useNavigate()
    if (props.isLoggedIn) {
        return props.children
    }
    else {
        return <Navigate to="/login"></Navigate>
    }
}

export default ProtectedRoute   