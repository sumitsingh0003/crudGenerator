import React, { useState } from 'react'
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import HomePage from './HomePage'
import AllAPI from './AllAPI'
import AllTables from './AllTables'
import AllPrefix from './AllPrefix'
import Icon from "../logoAPIHUB.png"
import axios from "axios";
import preloader from "../loading.gif"
import BannerIMG from "../bannerblank.jpg"

const MainPage = () => {
  const navigate = useNavigate()
  const [state, setstate] = useState(false);

  const logOut = async (e) => {
    setstate(true)
    e.preventDefault();
    const token = localStorage.getItem('token')
    try {
      const response = await axios.post('https://login-api.web2rise.in/api/logout', {}, {
        headers: {
          Authorization: token,
          'Content-Type': "application/json"
        }
      });
      
      if (response.data.message === 'Logout successful') {
        localStorage.removeItem('token')
        navigate('/')
        setstate(false)
      }
    } catch (error) {
      if (error.response.status === 500) {
        localStorage.removeItem('token');
        navigate('/');
        setstate(false);
      } else {
        console.error(error);
      }
    }
  }
  const currentYear = new Date().getFullYear();
  return (
    <>
      {state ?
        <div className="preloader">
          <img src={preloader} alt="preloader" />
        </div>
        : ''
      }
      {localStorage.getItem('token') ?
        <section className="mainpage_sec">
          <div className="container-fluid">
            <div className="row mainpage">
              <div className="col-lg-12 p-0">
                <div className="topbar_mainpage">
                  <NavLink exact="true" to="/">
                    <h4><img src={Icon} alt="" />Admin Login</h4>
                  </NavLink>
                  <input type="button" defaultValue="LogOut" className="logout_btn" onClick={logOut} />
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-3 col-3 p-0">
                <div className="sidebar_mainpage">
                  <ul>
                    <li><NavLink exact="true" to="/allprefix"> All Prefix</NavLink></li>
                    <li><NavLink exact="true" to="/alltables"> All Tables</NavLink></li>
                    <li><NavLink exact="true" to="/allapi"> All API</NavLink></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-9 col-9 p-0">
                <div className="content_mainpage">
                  <Routes>
                    <Route exact="true" path='/' element={<HomePage />} />
                    <Route exact="true" path='/allprefix' element={<AllPrefix />} />
                    <Route exact="true" path='/alltables' element={<AllTables />} />
                    <Route exact="true" path='/allapi' element={<AllAPI />} />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </section> : <>
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <NavLink className="navbar-brand" target='_sumit' to="https://sumitcoder.in/">Sumit Singh</NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <NavLink className="nav-link" exact="true" to="/">Home</NavLink>
                  <NavLink className="nav-link" exact="true" to="/login">Log In</NavLink>
                </div>
              </div>
            </div>
          </nav>
          <section>
            <div className="banner_main">
              <img src={BannerIMG} alt="" />
              <div className="container content_Banner">
                <div>
                  <h1>Welcome To Free Crud Generator API Hub</h1>
                  <h4>Discover and connect to thousands of APIs</h4>
                  <p>If you want to create a simple API for testing purposes, simply go to Login page and create prefix or table name now i'l provide your own API.</p>
                </div>
              </div>
            </div>
          </section>


          <section className="apiCont">
            <div className="container">
              <h2>FAQ's</h2>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      What is API?
                    </button>
                  </h3>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>
                        API (Application Programming Interface) is a computing interface that
                        defines how software components interact with each other. It is a way
                        of programmatically interacting with a separate software component or
                        resource and expose functionality for internal or external use and
                        testing. API defines what &lt;h2&gt;requests can &lt;/h2&gt; be made,
                        how they will be made and hides complexity from developers. API
                        extends systems to partners, organizes code, and makes components
                        reusable.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      What is API testing?
                    </button>
                  </h3>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>
                        API testing is a set of quality assurance actions that include making
                        calls to an API endpoint, getting API responses, and validating API
                        status codes, response times, and data against predefined rules. API
                        testing is usually performed by a software tool or web service and
                        mainly focuses on testing the business logic layer.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Why is API Testing Important?
                    </button>
                  </h3>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>
                        API testing determines whether the API meets expectations for
                        functionality, reliability, performance, and security. API testing is
                        essential for the entire development, implementation and maintenance
                        of APIs. API testing is necessary to accompany the API to make it
                        functional and ready for its purpose.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      How do I Test API Online?
                    </button>
                  </h3>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>
                        You can test API online by composing and executing various API
                        requests right from your browser. To test API online:1. Enter the URL
                        of the API endpoint and select the appropriate HTTP method. 2. In the
                        Content tab, enter the data you want to send to the API endpoint. 3.
                        If your API server requires authorization, enter your credentials in
                        the Authorization tab. 4. Click Send to submit your API request, check
                        the returned API status code, response time, and content. 5. Re-run
                        the API tests by changing the API endpoint URL, HTTP method, and
                        request data.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      Test API with Online REST API Client
                    </button>
                  </h3>
                  <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>
                        ReqBin is the most popular Online REST API testing tool. You can
                        quickly and easily test your API by sending API requests to REST API
                        endpoints directly from your browser. ReqBin API Tester provides
                        millisecond accurate timings for API requests and server responses.
                        With the ReqBin load testing tool, you can test the API against
                        hundreds of simulated concurrent users from different geographic
                        regions. The REST API client works right in your browser. No coding.
                        No desktop app. Fully online.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingSix">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                      JSON and XML API Tester
                    </button>
                  </h3>
                  <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>
                        Easily inspect returned JSON and XML responses. The built-in JSON and
                        XML formatters automatically format and validate the returned data and
                        highlight any errors in JSON and XML.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingSeven">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                      REST API Examples
                    </button>
                  </h3>
                  <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>
                        Learn REST API best practices by browsing a collection of real-world
                        REST API examples.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="site-footer">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-5">
                  <h6>About Us</h6>
                  <p className="text-justify">
                  sumitcoder.in <i>CODE WANTS TO BE SIMPLE </i> is an initiative to help
                    the upcoming programmers with the code. Sumit Singh focuses on providing
                    the most efficient code or snippets as the code wants to be simple. We
                    will help programmers build up concepts in different programming
                    languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript,
                    PHP, Android, SQL and Algorithm.
                  </p>
                </div>
                <div className="col-xs-6 col-md-2">
                  <h6>Categories</h6>
                  <ul className="footer-links">
                    <li><a href="/#.">UI Design</a></li>
                    <li><a href="/#.">PHP</a></li>
                    <li><a href="/#.">Android</a></li>
                    <li><a href="/#.">Templates</a></li>
                  </ul>
                </div>
                <div className="col-xs-6 col-md-2">
                  <h6>Quick Links</h6>
                  <ul className="footer-links">
                    <li><NavLink exact="true" to="/">Home</NavLink></li>
                    <li><NavLink exact="true" to="/login">Log In</NavLink></li>
                  </ul>
                </div>
                <div className="col-xs-6 col-md-3">
                  <h6>Get in Touch</h6>

                  <ul className="social-icons">
                    <li>
                      <a className="facebook" target="_sumit" href="https://www.facebook.com/sumitsingh0003/"><i className="fa fa-facebook"></i></a>
                    </li>
                    <li>
                      <a className="twitter" target="_sumit" href="https://www.instagram.com/sumitsingh0003/"><i className="fa fa-twitter"></i></a>
                    </li>
                    <li>
                      <a className="instagram" target="_sumit" href="https://www.instagram.com/sumitsingh0003/"><i className="fa fa-instagram"></i></a>
                    </li>
                    <li>
                      <a className="linkedin" target="_sumit" href="https://www.linkedin.com/in/sumitsingh0003/"><i className="fa fa-linkedin"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
              <hr />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-sm-6 col-xs-12">
                  <p className="copyright-text">
                    Copyright © {currentYear} All Rights Reserved.
                  </p>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <p className="developed-text">
                    Powered by
                    <a target="_sumit" href="https://sumitcoder.in/"> Sumit Singh</a>
                  </p>
                </div>
              </div>
            </div>
          </footer>

        </>}
    </>
  )
}

export default MainPage
