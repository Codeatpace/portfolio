import React from 'react'
import '../App.css'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <div className='card'>
              <center><h4>Education</h4></center><br/>
              <ul><b>University Of Mumbai</b>
                <li>1st Year - CGPA: 9.36/10 (85%)</li>
                <li>2nd Year - CGPA: 9.60/10 (89.5%)</li>
                <li>Currently in 3rd Year</li>
              </ul>
              <ul><b>HSC</b><li>80%</li></ul>
              <ul><b>SSC</b><li>85%</li></ul>
            </div>
          </div>
          <div className='col-4'>
            <div className='card'>
              <center><h4>Experience</h4></center><br/>
              <ul><li><b>Devtown</b> - <small>09/2022 - 12/2023</small>
              <br/><b>Full Stack Development Content Creation</b>
              <p>Created Twitter Clone Using ReactsJS. Created Computer Networks and Operating System Complete Course</p></li></ul>
              <ul><li><b>Tag8 (3Y Ventures LLP)</b> - <small>08/2022 - 03/2023</small>
              <br/><b>Software Testing and Improvement Analytics Intern</b>
              <p>I was working in the areas of Testing and Analytics of Company's
Website and Application. I have improved a lot of skills including
Communication, Team bonding, Discipline, and OfCourse Coding and
Testing.</p></li></ul>
            </div>
          </div>
          <div className='col-4'>
            <div className='card'>
              <center><h4>Achievements</h4></center>
              <ul>
                <li>Partipated in <b>MumbaiHacks</b>, 2023</li>
                <li><b>HOD</b> of Content Department of Technika(BscIT Fest)</li>
                <li>Have <b>hosted</b> various cultural and Official Events of BscIT department as well as of College</li>
                <li>Stood <b>2nd rank</b> in 1st yr. of BSc IT</li>
                <li>Received <b>Student of the Year Award</b> in 10th grade</li>
                <li><a href='https://www.hackerrank.com/singhsakshidb' style={{color:'black', textDecoration:'none', fontFamily:'cursive'}} target='_blank'> Hacker Rank </a></li>
                <li><a href='https://github.com/Codeatpace' style={{color:'black', textDecoration:'none', fontFamily:'cursive'}} target='_blank'> GitHub </a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default About