import image from '../Images/image.png'
import './profile.css'

function Profile (){
    return(
        <section id='about'>
        <div className='profileContainer'>
            <div className='profileContent'>
                <h5>UI/UX DESIGNER</h5>
                <h1 className='name'>Hello, My name is Madelyn Torff</h1>
                <p className='para'>Short text with details about you, What you do or
                    your professional career. You can add more information
                    on the about page.
                </p>
                <div>
                    <button className='projectsButton'>Projects</button>
                    <button className='linkedinButton'>LinkedIn</button>
                </div>
            </div>
            <div>
            <img src={image}  className='imgContainer'  alt='My Profile Pic' />
            </div>
            
        </div>
        </section>
    )
}

export default Profile