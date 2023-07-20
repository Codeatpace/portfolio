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
              <ul><li><b>Tag8 (3Y Ventures LLP)</b> - <small>09/2022 - 02/2023</small>
              <br/><b>Software Testing and Improvement Analytics Intern</b>
              <p>I was working in the areas of Testing and Analytics of Company's
Website and Application. I have improved a lot of skills including
Communication, Team bonding, Discipline, and OfCourse Coding and
Testing.</p></li></ul>
<ul><li><b>KlusterWise Pvt. Ltd</b> - <small>05/2022 - 06/2022</small>
              <br/><b>Content Creation Intern</b>
              <p>Educator, Created Java and C Programming Tutorial Videos for the firm.</p></li></ul>         
            </div>
          </div>
          <div className='col-4'>
            <div className='card'>
              <center><h4>Achievements</h4></center>
              <ul>
                <li>Stood 2nd rank in 1st yr. of BSc IT</li>
                <li>Received Student of the Year Award in 10th grade</li>
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