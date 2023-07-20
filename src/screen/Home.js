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
        <p>Looking forward to obtaining a challenging role in a reputable organization
where my skills and knowledge in <strong>Problem solving</strong>, and <strong>development</strong> can be
utilized to contribute towards the growth of the organization and myself.</p>
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