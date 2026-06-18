import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { FetchUserMe } from '../../controllers/fetchUserMe'
import Sidebar from '../../components/Sidebar'

const fetchUserMe = new FetchUserMe()

export default function Dashboard() {
    const { token } = useContext(AuthContext)
    const [user, setUser] = useState(null)

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
        <div className='dark min-h-screen bg-[#09080f] flex'>
            <Sidebar user={user} />
            <main className='flex-1 p-8'>
                <h1 className='text-white'>Bem-vindo de volta, {user.nome}!</h1>
            </main>
        </div>
    )
}