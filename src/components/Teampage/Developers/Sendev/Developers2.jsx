import React from 'react'
import './SrDevelopers.css';
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
// import Data from '../../../../../src/Data/Developers.json'
import { devd } from '../../../../Data/DevelopersData';
function Developers() {
    return (
        <>  
            <section className="senior-developers">
                <div className="sr_heading">
                    <h1>SENIOR DEVELOPERS</h1>
                </div>
                <div className="container">
                    {
                        devd.map(data => {
                            return (
                                <div className="sr-dev" key={data.id}>
                                    <div className="body">
                                        <div className="images">
                                            {/* <img src={require(`../../../../assets/testimonial/${data.image}`).default} alt="" /> */}
                                            <img src={data.image} alt="" />
                                            {/* <img src={require(`../../../../assets/testimonial/${data.image}`).default} alt="" /> */}
                                        </div>
                                        <h3 className='title'>{data.name}</h3>
                                    </div>
                                    <p className="dev_card_text">{data.rank}</p>
                                    <div className="social-media">
                                        <a href={data.fb} className="MediaLogo"><FaFacebook size={30} /></a>
                                        <a href={data.linkdln} className="MediaLogo"><FaLinkedin size={30} /></a>
                                        <a href={data.git} className="MediaLogo"><BsGithub size={30} /></a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Developers;