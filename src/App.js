// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useCallback, useState } from 'react';
import api from './api/Users';
import NavBar from './components/NavBar';
import PersonalDetails from './components/PersonalDetails';
import EducationDetails from './components/EducationDetails';
import ProjectsDeveloped from './components/ProjectsDeveloped';
import ExperienceDetails from './components/ExperienceDetails';
import ExtraDetails from './components/ExtraDetails';
import Resume from './components/Resume';

function App() {
  const [uid, setUid] = useState()
  const [personData, setpersonData] = useState({
    _id:'',
    //Personal Details...
    firstName: '',
    lastName: '',
    email: '',
    website: "",
    phone: '',
    github: "",
    linkedin: "",
    facebook: "",
    instagram: "",
    twitter: "",

    // Education Details..
    college: '',
    fromyear1: '',
    toyear1: '',
    qualification1: '',
    description1: '',
    school: '',
    fromyear2: '',
    toyear2: '',
    qualification2: '',
    description2: '',

    // Project Details...
    title1: '',
    link1: '',
    projectDescription1: '',
    title2: '',
    link2: '',
    projectDescription2: '',

    // Experience Details..
    institute1: '',
    position1: '',
    duration1: '',
    experienceDescription1: '',
    institute2: '',
    position2: '',
    duration2: '',
    experienceDescription2: '',

    // Extra ...
    skill1: '',
    skill2: '',
    skill3: '',
    skill4: '',
    skill5: '',
    skill6: '',
    interest1: '',
    interest2: '',
    interest3: '',
    interest4: '',
    interest5: '',
    interest6: '',

  })

  let handleChange = (event) => {
    setpersonData({
      ...personData,
      [event.target.name]: event.target.value
    })
  }
  // let setId=async ()=>{
  //   let a=await setpersonData({
  //     ...personData,
  //     _id:new Date().getTime().toString()
  //   })
  //   let b=await setUid(personData._id)
  // }

  let postData = async () => {
    // setId()
    // console.log(data);
   
      let res = await api.post("user", personData)
      console.log(res.data)
    }

console.log(personData);

  return (
    <Router>
      <div className="App">
        <NavBar />
        {/* <Resume/> */}
        <Switch>
          <Route exact path={'/'} ><PersonalDetails handleChange={handleChange} personData={personData} /></Route>
          <Route path={'/EducationDetails'} ><EducationDetails handleChange={handleChange} personData={personData} /></Route>
          <Route path={'/ProjectsDeveloped'}><ProjectsDeveloped handleChange={handleChange} personData={personData} /></Route>
          <Route path={'/ExperienceDetails'}><ExperienceDetails handleChange={handleChange} personData={personData} /></Route>
          <Route path={'/ExtraDetails'}><ExtraDetails handleChange={handleChange} personData={personData}  postData={postData} /></Route>
          <Route path={'/Resume'}><Resume handleChange={handleChange} personData={personData} /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
