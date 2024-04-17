import { Navigate, Route, Routes } from "react-router-dom"

export const AppRoutes = () => {
    return (
    <Routes>
        <Route path='/' element={<span>Home Page</span>} />
        <Route path='/profile' element={<span>Profile Page</span>} />
        <Route path='*' element={<Navigate to='/' />} />
    </Routes>
    )
}