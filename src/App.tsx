// Elise Gordon
// app to display the NCAA basketball teams
import React from 'react';
import './App.css';
import collegeData from './CollegeBasketballTeams.json';

//set the interface
interface CollegeProps {
  school: string;
  name: string;
  city: string;
  state: string;
}
const collegeNames = collegeData.teams;

// welcome function: introduces user to website
function Welcome() {
  return (
    <div>
      <h1>NCAA Basketball Colleges</h1>
      <h3 className="intro">
        With March Matdness upon us, we have created a website to list out
        information about all the colleges involved in NCAA Basketball.
      </h3>
    </div>
  );
}

// render each individual college card based on database
class College extends React.Component<CollegeProps> {
  render() {
    const oneCollege = this.props;
    return (
      <div className="college-card">
        <h2>School: {oneCollege.school}</h2>
        <h3>Mascot: {oneCollege.name}</h3>
        <h3>
          Location: {oneCollege.city}, {oneCollege.state}
        </h3>
      </div>
    );
  }
}
// creates the list of all the individual college cards
function CollegeList() {
  return (
    <div className="college-container">
      {collegeNames.map((oneCollege) => (
        <College {...oneCollege} />
      ))}
    </div>
  );
}
// main app function
function App() {
  return (
    <div className="App">
      <Welcome />
      <CollegeList />
    </div>
  );
}
export default App;
