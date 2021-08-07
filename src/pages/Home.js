import React, { useState } from 'react'
import '../styles/style.scss'
import Logo from '../assets/images/logo.svg'
import Illustration from '../assets/images/illustration-working.svg'

export function Home() {

const [Link, setLink] = useState("")
const [ShortLink, setShortLink] = useState([])

const GetShorterLink = () =>{

    const url = `https://api.shrtco.de/v2/shorten?url=${Link}`

    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        JSON.stringify(data)
        let teste = data.result.full_short_link3
        ShortLink.push(teste)
        setShortLink(ShortLink)
        console.log(ShortLink)

      })
      .catch(err => {
        console.log("Erro ao encurtar link " + err);
      }); 
}

const handleChangeInputLink = (event) => {
    let inputLink = event.target.value
    setLink(inputLink)
} 

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

            <main className="content">
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
            </main>

            <div className="bg-shorten">
                <div>
                    <input type="text" value={Link} onChange={handleChangeInputLink} 
                    placeholder="  Shorten a link here..."/>
                    <button onClick={GetShorterLink}>Shorten It!</button>
                </div>
            </div>

            <div>
            {ShortLink?.map(info => {
                return (
                    <li>{info}</li>
                )
                })
              }
            </div>
            

            <div className="content-site">
                <h1>
                    Advanced Statistics
                </h1>
                <p>
                    Track how your links are performing across the web
                    with our advanced statistics dashboard.
                </p>
            </div>
        </div>
    )
}
