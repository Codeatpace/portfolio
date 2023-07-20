import React from 'react'
import '../App.css'
import Footer from '../components/Footer'

const Project = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-body">
                <center><h5 class="card-title">Canteen WebApp</h5></center>
                <p class="card-text">It is a Web App developed using MERN. This app is used to order food and
track the order within the college or any association premises.</p>
                <center><a className='butn' href="https://github.com/Codeatpace/CanteenApp/tree/main" target='_blank'>View (Code)</a></center>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-body">
                <center><h5 class="card-title">FaceBook Clone</h5></center>
                <p class="card-text">This website is a FaceBook Frontend Clone which is developed using HTML, CSS, Bootstrap</p>
                <center><a className='butn' href="https://github.com/Codeatpace/MyProjects/blob/main/Facebook.html" target='_blank'>View (Code)</a></center>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-body">
                <center><h5 class="card-title">Minor Projects</h5></center>
                <p class="card-text">This includes News Website, CollegeLibrary, Notepad</p>
                <center><a className='butn' href="https://github.com/Codeatpace/MyProjects" target='_blank'>View (Code)</a></center>
              </div>
            </div>
          </div>
        </div>
      </div>

<Footer/>
    </>
  )
}

export default Project