import React, { useState } from 'react'
import '../styles/style.scss'
import {CopyToClipboard} from 'react-copy-to-clipboard';

import Logo from '../assets/images/logo.svg'
import Illustration from '../assets/images/illustration-working.svg'
import Facebook from '../assets/images/icon-facebook.svg'
import Instagram from '../assets/images/icon-instagram.svg'
import Pinterest from '../assets/images/icon-pinterest.svg'
import Twitter from '../assets/images/icon-twitter.svg'
import Customizable from '../assets/images/icon-fully-customizable.svg'
import Brand from '../assets/images/icon-brand-recognition.svg'
import Records from '../assets/images/icon-detailed-records.svg'

export function Home() {

const [Link, setLink] = useState("")
const [ShortLink, setShortLink] = useState([])
const [Shortening, setShortening] = useState(false)
const [Validate, setValidate] = useState(false)
const [CopyButton, setCopyButton] = useState(false)


const GetShorterLink = () =>{

   

    setShortening(true)
    const url = `https://api.shrtco.de/v2/shorten?url=${Link}`

    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        JSON.stringify(data)
        console.log(data)
        let shortenedLink = data.result.full_short_link3

        let originals = data.result.original_link
  

        let newLinks = {
            original: originals,
            shortened: shortenedLink,
                }

           
        ShortLink.push(newLinks)
        setShortLink(ShortLink)
        console.log("sucesso", ShortLink)
        setShortening(false)

        

      })
      .catch(err => {
        console.log("Erro ao encurtar link " + err);
      }); 
}

const handleChangeInputLink = (event) => {
    let inputLink = event.target.value
    setLink(inputLink)
} 

const handleValidation =() => {
    if(Link.length > 0){
        setValidate(false)
        GetShorterLink()
    }else{
        setValidate(true)
    }
}

const CopyLink = (e) => {
    setCopyButton(true)
}

    return (
        <div>
            <div className="main">

            <div className="menu">
                <img src={Logo} alt="Image logo Shortly" />
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

            </div>

            <div className="page-background">
            <div className="input-link">
                <div>
                <input type="text" value={Link} onChange={handleChangeInputLink} 
                    placeholder="  Shorten a link here..." style={Validate?{border: "2px solid hsl(0, 87%, 67%)"}:null}/>
                    
                <button onClick={handleValidation} disabled={Shortening} className="button-square">
                    {Shortening? "Wait..." :"Shorten It!"}
                </button>
                </div>

                <span>{Validate? "Please add a link" : null}</span>
               
            </div>

            <div>
                {ShortLink?.map(info => {
                return (
                    <div className="list" key={info.shortened}>
                        <a href={info.original}>{info.original}</a>
                            <a href={info.shortened} style={{color: "hsl(180, 66%, 49%)"}}>
                                {info.shortened}
                            </a>
                            <CopyToClipboard text={info.shortened}>
                            <button className="button-square" onClick={CopyLink} style={CopyButton?{backgroundColor:"hsl(257, 27%, 26%)"}:null}>
                                {CopyButton? "Copied!" :"Copy"}
                            </button>
                            </CopyToClipboard>
                    </div>
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

            <div className="cards">     
            <div>
                    <img src={Brand} alt="Image Brand Recognation" />
                <h1>
                    Brand Recognation
                </h1>
                <p>
                    Boost your brand recognation with each click. Generic links
                    don't mean a thing. Branded links help instil confidence in your
                    content.
                </p>
            </div>

            <div>
                <img src={Records} alt="Image Detailed Records" />
                <h1>
                    Detailed Records
                </h1>
                <p>
                    Gain insights into who is clicking your links. Knowing when and where
                    people engage with your content helps inform better decisions.
                </p>
            </div>

            <div>
                <img src={Customizable} alt="Image Fully customizable"/>
                <h1>
                    Fully customizable
                </h1>
                <p>
                    Improve brand awareness and content discoverability through customizable
                    links, supercharging audience engagement.
                </p>
            </div>
            </div>

            
            <div className="background-boost">
                <h1>Boost your links today</h1>

                <div>
                    <button>Get Started</button>
                </div>

            </div>
            </div>

            <div className="footer">
                <div>

                    <img src={Logo} alt="Image logo Shortly" style={{height: "50%"}} />

                <dl>
                    <dt className="font-main-link"><a href="#" >Features</a></dt>
                    <dd><a href="#" >Link Shortening</a></dd>
                    <dd><a href="#" >Branded Links</a></dd>
                    <dd><a href="#" >Analytics</a></dd>
                </dl>

                <dl>
                    <dt className="font-main-link"><a href="#" >Resources</a></dt>
                    <dd><a href="#" >Blog</a></dd>
                    <dd><a href="#" >Developers</a></dd>
                    <dd><a href="#" >Support</a></dd>
                </dl>

                <dl>
                    <dt className="font-main-link"><a href="#" >Company</a></dt>
                    <dd><a href="#" >About</a></dd>
                    <dd><a href="#" >Our Team</a></dd>
                    <dd><a href="#" >Careers</a></dd>
                    <dd><a href="#" >Contact</a></dd>
                </dl>

                
                    <a href="#" >{<img src={Facebook} alt="Facebook" />}</a>
                    <a href="#" >{<img src={Twitter} alt="Twitter" />}</a>
                    <a href="#" >{<img src={Pinterest} alt="Pinterest" />}</a>
                    <a href="#" >{<img src={Instagram} alt="Instagram" />}</a>
               

                </div>
            </div>

        </div>
    )
}
