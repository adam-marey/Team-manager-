import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import AllProjects from './components/Project/AllProjects';
import ProjectForm from './components/Project/ProjectForm';
import SingleProject from './components/Project/SingleProject';
import AllStudents from './components/Student/AllStudents';
import SingleStudent from './components/Student/SingleStudent';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <ProjectForm />
      <SingleProject />
      <AllProjects />
      <SingleStudent />
      <AllStudents />
    </div>
  );
}

export default App;
