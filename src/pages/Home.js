import React from 'react'
import '../styles/style.scss'
import Logo from '../assets/images/logo.svg'
import Illustration from '../assets/images/illustration-working.svg'

export function Home() {
    return (
        <div>
            <div className="menu">
                <img src={Logo} alt="Imagem da logo Shortly" />
                <a href="#" >Features</a>
                <a href="#">Pricing</a>
                <a href="#">Resources</a>
                <div className="login">
                    <a href="#">Login</a>
                <button>Sign Up</button>
            </div>
            </div>

            <div className="content">
                <div>
                <h1>
                    More than just shorter links
                </h1>
                <p>
                    Build your brand's recognation and get detailed insights on how
                    your links are performing.
                </p>
                <button>Get Started</button>
                </div>
                <div>
                <img src={Illustration} alt="Ilustração de pessoa trabalhando no computador" />
                </div>
            </div>
        </div>
    )
}
