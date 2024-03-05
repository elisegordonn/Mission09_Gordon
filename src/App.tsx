import React from 'react';
import './App.css';
import collegeData from './CollegeBasketballTeams.json';

interface CollegeProps {
  school: string;
  name: string;
  city: string;
  state: string;
}
const collegeNames = collegeData.teams;

function Welcome() {
  return (
    <div>
      <h1>NCAA Basketball Colleges</h1>
      <h3>
        With March Madness upon us, we have created a website to list out
        information about all the colleges involved in NCAA Basketball.
      </h3>
    </div>
  );
}
class College extends React.Component<CollegeProps> {
  render() {
    const oneCollege = this.props;
    return (
      <div>
        <h2>School: {oneCollege.school}</h2>
        <h3>Mascot: {oneCollege.name}</h3>
        <h3>
          Location: {oneCollege.city}, {oneCollege.state}
        </h3>
      </div>
    );
  }
}

function CollegeList() {
  return (
    <div>
      {collegeNames.map((oneCollege) => (
        <College {...oneCollege} />
      ))}
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Welcome />
      <CollegeList />
    </div>
  );
}
export default App;
