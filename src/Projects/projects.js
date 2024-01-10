import './projects.css'
import i1 from '../Images/i1.png'
import i2 from '../Images/i2.png'
import i3 from '../Images/i3.png'
import insta from '../Images/insta.png'
import linkedin from '../Images/linkedin.png'
import mail from '../Images/mail.png'
import v2 from '../Images/V2.png'



function Projects(){
    return(
        <section id='projects'>
        <div className="formContainer">

            <h2 className='Projects'>Projects</h2>
            <hr style={{width:'90px', border:'2px solid #FDC435', borderRadius:'2px', marginBottom:'15px',marginTop:'0px'}}/>
            <div className='projectContainer'>
                <div className='textContainer'>
                    <h1 className='projectName'>Project Name</h1>
                    <p className='projectDescription'>I created this personal project in order to show how to create an interface
                        in Figma using a portfolio as an example
                    </p>
                    <button className='viewButton'> View Project </button>

                </div>
                <img src={i1} alt='ProjectPic' className='projectImage' />
            </div>
            <div className='projectContainer'>
                <img src={i2} alt='ProjectPic' className='projectImage' />
                <div className='textContainer'>
                    <h1 className='projectName'>Project Name</h1>
                    <p className='projectDescription'>What was your role, Your deliverables, if the project was personal, freelancing
                    </p>
                    <button className='viewButton'> View Project </button>

                </div>
            </div>
            <div className='projectContainer'>
                <div className='textContainer'>
                    <h1 className='projectName'>Project Name</h1>
                    <p className='projectDescription'>You can also add in this description the type of the project, if it was for web, mobile, electron 
                    </p>
                    <button className='viewButton'> View Project </button>

                </div>
                <img src={i3} alt='ProjectPic' className='projectImage' />
            </div>
        </div>
        <section id='contact'>
        <div className='logoContainer'>
            <img src={insta} alt='logo' className='logo' />
            <img src={linkedin} alt='logo' className='logo' />
            <img src={mail} alt='logo' className='logo' />

        </div>
        <div className='copyrightContainer'>

        <p>Copyright © 2024. All rights reserved</p>
        </div>
        </section>
        <div>
                <img src={v2} alt='vector' className='vector' />
            </div>

        </section>
    )
}

export default Projects