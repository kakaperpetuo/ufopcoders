import { Link } from 'react-router-dom'
import { Code2, Users, Rocket, Target } from 'lucide-react'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext } from 'react'

export default function Landing() {

    const { token, logout } = useContext(AuthContext);


    return (
        <div className="dark min-h-screen bg-background">
            <header className="border-b border-border bg-card">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="relative w-10 h-10">
                            <svg viewBox="0 0 40 40" className="w-full h-full">
                                <text
                                    x="20"
                                    y="28"
                                    fontSize="24"
                                    fontWeight="bold"
                                    textAnchor="middle"
                                    fill="#8b5cf6"
                                >
                                    UC
                                </text>
                            </svg>
                        </div>
                        <span className="text-primary">UFOP Coders</span>
                    </div>
                    {token ? (
                        <div>
                            <button
                                className="px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors"
                                onClick={logout} 
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="flex gap-3">
                            <Link
                                to="/login"
                                className="px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors"
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                            >
                                Sign Up
                            </Link>
                        </div>
                    )}
                </div>
            </header>
            <main>
                <section className="container mx-auto px-6 py-20 text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex justify-center mb-6">
                            <div className="relative w-24 h-24">
                                <svg viewBox="0 0 100 100" className="w-full h-full">
                                    <text
                                        x="50"
                                        y="70"
                                        fontSize="60"
                                        fontWeight="bold"
                                        textAnchor="middle"
                                        fill="#8b5cf6"
                                    >
                                        UC
                                    </text>
                                </svg>
                            </div>
                        </div>
                        {token ? (

                            <h1 className="text-5xl mb-6 text-foreground">
                                Bem-vindo de volta!
                            </h1>
                    
                        ) : (
                            
                            <h1 className="text-5xl mb-6 text-foreground">
                                Bem-vindo ao UFOP Coders!
                            </h1>

                        )}
                        
                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Uma plataforma colaborativa onde desenvolvedores se unem para construir projetos inovadores.
                            Conecte-se com seus pares, compartilhe ideias e traga sua visão de programação à vida.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Link
                                to="/register"
                                className="px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-lg"
                            >
                                Comece Agora
                            </Link>
                            {
                                token ? (
                                    <div></div>
                                ) : (
                                    <Link
                                        to="/login"
                                        className="px-8 py-4 rounded-lg border-2 border-primary text-primary hover:bg-primary/10 transition-colors text-lg"
                                    >
                                        Login
                                    </Link>
                                )
                            }
                        </div>
                    </div>
                </section>
                <section className="container mx-auto px-6 py-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        <div className="p-6 rounded-lg bg-card border border-border text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                                <Code2 className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="mb-2 text-card-foreground">Colabore em projetos</h3>
                            <p className="text-sm text-muted-foreground">
                                Junte-se a equipes que trabalham em IA, blockchain, desenvolvimento web e muito mais
                            </p>
                        </div>
                        <div className="p-6 rounded-lg bg-card border border-border text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                                <Users className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="mb-2 text-card-foreground">Conecte-se com desenvolvedores</h3>
                            <p className="text-sm text-muted-foreground">
                                Faça networking com estudantes e profissionais que compartilham seus interesses
                            </p>
                        </div>
                        <div className="p-6 rounded-lg bg-card border border-border text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                                <Rocket className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="mb-2 text-card-foreground">Publique suas ideias</h3>
                            <p className="text-sm text-muted-foreground">
                                Transforme conceitos em realidade com membros de equipe motivados
                            </p>
                        </div>
                        <div className="p-6 rounded-lg bg-card border border-border text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                                <Target className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="mb-2 text-card-foreground">Encontre projetos que combinem com suas habilidades</h3>
                            <p className="text-sm text-muted-foreground">
                                Encontre projetos alinhados com suas linguagens de programação e frameworks
                            </p>
                        </div>
                    </div>
                </section>
                {token ? (<div></div>) : (
                    <section className="container mx-auto px-6 py-16">
                        <div className="max-w-4xl mx-auto bg-card border border-border rounded-lg p-12 text-center">
                            <h2 className="mb-4 text-card-foreground">Está pronto para codar junto?</h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Junte-se ao UFOP Coders hoje mesmo e descubra projetos que combinam com seus objetivos em programação
                                linguagens, frameworks, IA, desenvolvimento web, blockchain e muito mais.
                            </p>
                            <Link
                                to="/register"
                                className="inline-block px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-lg"
                            >
                                Crie sua conta
                            </Link>
                        </div>
                    </section>
                )}
            </main>
            <footer className="border-t border-border mt-20">
                <div className="container mx-auto px-6 py-8 text-center text-muted-foreground">
                    <p>&copy; 2026 UFOP Coders. Construindo o futuro, um projeto de cada vez.</p>
                </div>
            </footer>
        </div>
    )
}
