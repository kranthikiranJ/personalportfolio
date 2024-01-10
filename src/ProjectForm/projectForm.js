import './projectForm.css'
import v2 from '../Images/V2.png'

function projectForm(){
    return(
        <>
            <div className="formContainer">

            <h2 className='addProject'>Add Project</h2>
            <hr style={{width:'90px', border:'2px solid #FDC435', borderRadius:'2px', marginBottom:'15px',marginTop:'0px'}}/>
            <form>
                <div className='inputContainer'>
                <label htmlFor="name" className='pName' >Project Name</label><br/>
                <input id="name" className='inputName' type="text" placeholder=''/>
                </div>

                <div className='inputContainer'>
                <label htmlFor="link" className='pName' >Project Link</label><br/>
                <input id="link" className='inputName' type="url" placeholder=''/>
                </div>

                <div className='inputContainer'>
                <label htmlFor="description" className='pName' >Description</label><br/>
                <textarea id="description" className='descriptionArea'></textarea>
                </div>
                <div className='buttonContainer'>
                <button className='addButton'  type="submit" >Add</button>
                </div>
            </form>
            </div>
            <div>
                <img src={v2} alt='vector' className='vector' />
            </div>
        </>

    )
}

export default projectForm