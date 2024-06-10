import React from 'react';
import Navbar from './Navbar';
const Faq = () => {
  return (
    <div>
      <div className="container">
      <Navbar/>
      <nav class="navbar navbar-expand-lg fixed-top bg-dark" data-bs-theme="dark">
          <div class="container-fluid">
            <a class="navbar-brand"> <font style={{ color: 'rgb(107,255,0)' }} >
              <img src="data:image/jpeg;base64,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" alt="Bootstrap" width="40" height="40" />
            COCHIN</font> <font style={{ color: 'rgb(0,0,0)' }}></font>International <font style={{ color: 'rgb(0,0,0)' }}></font>Airport Limited (CIAL)
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Service">Services</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/ContactUs">Contact Us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Faq">FAQ</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/AboutUs">About Us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <br/>
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row justify-content-center" style={{marginTop:'80px'}}>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                 <h3 style={{ color: 'rgb(0,0,0)' }}>FAQ's- General Airport Enquiries</h3>
                 <div className="accordion" id="faqAccordion">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      1. How early should I arrive at the airport before my flight?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
      <div className="accordion-body">
      We recommend arriving at least 2 hours before domestic flights and 3 hours before international flights to allow enough time for check-in, security screening, and boarding.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        2. Is there Internet access or Wi-Fi at the Airport?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      In the Airport terminal there is an Airport Wi-Fi network available that gives you access to the Internet free for 120 minutes.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      3.What should I do if I lose or find something at the Airport?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      If you lose something on board the aircraft, in the terminal or in the airport coaches, then please fill the service form on lost and found page on the website or contact lost & found centre located in the terminal.

If you find something, you can handover it to the employees at the Lost and Found counter.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      4.Can I exchange money at the Airport?
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Yes, there is money transfer or currency exchange outlet at the Airport. There are ATMs provided by different banks as well.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      5.Is a parent allowed to accompany a child through check-in?
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Parents of unaccompanied minors need to contact respective airlines for the handover procedure before check in. There is a procedure to be followed for Unaccompanied Minor (UNMR) OR young passenger (YP)
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
      6.Is there any Child Care lounge facility at the Airport?
      </button>
    </h2>
    <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Yes, there are Baby care rooms available at both the terminals equipped with changing facilities and other basic hygiene amenities.
    </div>
  </div>
</div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
  
};

export default Faq
