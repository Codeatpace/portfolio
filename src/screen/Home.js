import React from 'react'
import pic from '../screen/portfolio.jpg'
import '../App.css'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <br/>
    <div className='container'>
    <div className='row'>
      <div className='col-2'></div>

    <div className='col-4 info'>
      <center><h1 className='name'>Sakshi Singh</h1></center><br/>
      <b>MERN Devloper, Full Stack Developer, SoftWare Developer</b><br/><br/>
      Seeking a dynamic role in a reputable organization to apply my expertise in <b>software development</b>
and <b>testing</b>. Keen to contribute to organizational growth while advancing my own professional
journey, driven by a <b>problem-solving</b> nature.
      </div>
      <div className='col-4'>
        <img className='pp' src={pic} height={400} width={300}/>
      </div>
      <div className='col-2'></div>
    </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home