import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { FetchUserMe } from '../../controllers/fetchUserMe'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

const fetchUserMe = new FetchUserMe()

export default function Dashboard() {
    const { token } = useContext(AuthContext)
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        async function loadUser() {

            const response = await fetchUserMe.execute(token)
            if (response) {
                setUser(response.data)
            }
        }

        if (token) {
            loadUser()
        }
    }, [token])

    if (!user) return <p className='text-gray-400 p-6'>Carregando...</p>

    return (
        <div className='dark min-h-screen bg-[#09080f] flex flex-col'>
            <Header />
            
            {/*Conteúdo*/}
            <div className='flex flex-1'>
                <Sidebar user={user} />
                <main className='flex-1 p-8'>
                    <h1 className='text-white'>Bem-vindo de volta, {user.nome}!</h1>
                </main>
            </div>
        </div>
    )
}