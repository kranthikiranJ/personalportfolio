import './App.css';
// import Header from './Header/header';
import Navbar from './Header/header';
import Profile from './Profile/profile';
import ProjectForm from './ProjectForm/projectForm';
import Projects from './Projects/projects';
function App() {
  return (
    <>
    <div className='appContainer'>

      < Navbar />
      <Profile/>
      <ProjectForm/>
      <Projects/>
    </div>
    </>
  );
}

export default App;
