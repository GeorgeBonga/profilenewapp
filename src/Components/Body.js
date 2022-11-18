import React from 'react'
import FontAwesome from 'react-fontawesome'
import './Body.css';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Body() {
  const tabs = document.querySelectorAll('[data-tab-value]')
  const tabInfos = document.querySelectorAll('[data-tab-info]')

  tabs.forEach(tab => {
 
    tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabValue);
    tabInfos.forEach(tabInfo => {
      tabInfo.classList.remove('active')
    })
    target.classList.add('active');
  })
  })


  return (
    
    <div >
      <section class="main-body">
        <div>
          <img src="images/cover.jpg" />
          <div class="Ad">
            <h1> Develop Modern Solutions through technology</h1>
            <p>
              Craft Modern day solutions to improve business and modern day life. Our team is dedicated to develop
              modern day software to solve modern day problems.
            </p>
          </div>
        </div>
        {/* <div class="company-info">
          <div>
            <h4 style="text-transform: capitalize;">Get the Best Software systems from our top guided team</h4>
            <p>
              <span>
                Our development team aims at delivering the best to their customers.
                The softwares developed <br />
                to our clients are well tested to suit their needs.
              </span>
              <span>
                The company is guided by its motto to ensure client satisfaction<br />
                from our services.
              </span>
            </p>
            <p>
              <span>
                With the rise of big data and artificial intelligence, there is more need to develop data driven applications.
                <br />Our company helps modern businesses to develop data driven applications that harnesses the true power of data
              </span>
            </p>
          </div>
        </div> */}
        <section id="aboutUs" class="secPad">
          <div class="container">
            <div class="row">

              <div class="col-md-4 text-center tileBox">
                <div class="txtHead"> <i class="fa fa-desktop"></i>
                  <h3>Commercial Website<span class="id-color">Design</span></h3></div>
                <p>Our team plays key role in development of ecommerce websites. With the highly skilled team, there is guranteed success of commercial projects</p>
              </div>

              <div class="col-md-4 text-center tileBox">
                <div class="txtHead"><i class="fa fa-css3"></i>
                  <h3>Payment Systems<span class="id-color">Integration</span></h3></div>
                <p>We facilitate the integration of paypal, Mpesa, Banks and Other E wallets into the client's systems. </p>
              </div>

              <div class="col-md-4 text-center tileBox">
                <div class="txtHead"><i class="fa fa-lightbulb-o"></i>
                  <h3>Management softwares</h3>
                </div>
                <p>The company offers Point of sale softwares, Management Softwares and other systems to our clients according to their own customization</p>
              </div>

            </div>
          </div>
        </section>
        <div class="tech-stack">

          <div class="tabs-cover">
            <h4>Our Tech Stack</h4>
            <div class="tabs">
              <span data-tab-value="#tab_1">Programming Languages</span>
              <span data-tab-value="#tab_2">Databases</span>
              <span data-tab-value="#tab_3">Devops</span>
              <span data-tab-value="#tab_4">Technologies</span>

            </div>

            <div class="tab-content">
              <div class="tabs__tab active" id="tab_1" data-tab-info>
                <div class="technology-logo-cover">
                  <div class="technology-logo">
                    <img src="images/logo/python-logo-only.png" />
                  </div>
                  <div class="technology-logo">
                    <img src="images/logo/rust.png" />
                  </div>
                  <div class="technology-logo">
                    <img src="images/logo/cpp.png" />
                  </div>
                  <div class="technology-logo">
                    <img src="images/logo/js.png" />
                  </div>
                </div>
              </div>
            </div>
            <div class="tabs__tab" id="tab_2" data-tab-info>
              <div class="technology-logo-cover">
                <div class="technology-logo">
                  <img src="images/logo/mysql.png" />
                </div>
                <div class="technology-logo">
                  <img src="images/logo/postgress.png" />
                </div>
                <div class="technology-logo">
                  <img src="images/logo/redis.png" />
                </div>
              </div>
            </div>
            <div class="tabs__tab" id="tab_3" data-tab-info>
              <div class="technology-logo-cover">
                <div class="technology-logo">
                  <img src="images/logo/debian.png" />
                </div>
                <div class="technology-logo">
                  <img src="images/logo/ubuntu.png" />
                </div>
                <div class="technology-logo">
                  <img src="images/logo/docker.png" />
                </div>
              </div>
            </div>
            <div class="tabs__tab" id="tab_4" data-tab-info>
              <div class="technology-logo-cover">
                <div class="technology-logo">
                  <img src="images/logo/node.png" />
                </div>
                <div class="technology-logo">
                  <img src="images/logo/react.png" />
                </div>
                <div class="technology-logo">
                  <img src="images/logo/django.png" />
                </div>
                <div class="technology-logo">
                  <img src="images/logo/flask.png" />
                </div>
                <div class="technology-logo">
                  <img src="images/logo/elastic.png" />
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>


      <section id="aboutUs" class="secPad">
        <div class="container">
          <div class="heading text-center">

            <h2>We do UI Designer & developer</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div class="row">

            <div class="col-md-4 text-center tileBox">
              <div class="txtHead"> <i class="fa fa-desktop"></i>
                <h3>Responsive <span class="id-color">Design</span></h3></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum erat et neque tincidunt volutpat. Cras eget augue id dui varius pretium.</p>
            </div>

            <div class="col-md-4 text-center tileBox">
              <div class="txtHead"><i class="fa fa-css3"></i>
                <h3>HTML5/CSS3 <span class="id-color">Dev</span></h3></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum erat et neque tincidunt volutpat. Cras eget augue id dui varius pretium.</p>
            </div>

            <div class="col-md-4 text-center tileBox">
              <div class="txtHead"><i class="fa fa-lightbulb-o"></i>
                <h3>JavaScript <span class="id-color">jQuery</span></h3></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum erat et neque tincidunt volutpat. Cras eget augue id dui varius pretium.</p>
            </div>

          </div>
        </div>
      </section>

      <section id="quote" class="bg-parlex">
        <div class="parlex-back">
          <div class="container secPad text-center">
            <h2>If I asked people what they wanted, they would have said ‘Faster Horses’.</h2><h3>-Henry Ford</h3>
          </div>

        </div>
      </section>


      <section id="skills" class="secPad white">
        <div class="container">
          <div class="heading text-center">
            <img src="logo192.png" alt="Avatar" class="avatar" />
            <h2>Master Skills</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <h2>Programming <strong>Skills</strong></h2>
              <p class="mrgBtm20">
                It takes knowledge, smart work, and dedication to make great ideas come to life. I have been helping make great ideas happen for the past 7 years and am always ready for new challenges.

              </p>
              <div class="row">
                <div class="col-md-2 skilltitle">HTML5</div>
                <div class="col-md-8">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" >
                      <span class="sr-only">90% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-2 skilltitle">CSS/CC3</div>
                <div class="col-md-8">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" >
                      <span class="sr-only">90% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-2 skilltitle">JavaScript</div>
                <div class="col-md-8">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                      <span class="sr-only">80% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-2 skilltitle">ReactNative</div>
                <div class="col-md-8">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                      <span class="sr-only">90% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-2 skilltitle">Python</div>
                <div class="col-md-8">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                      <span class="sr-only">90% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <h2>Designing <strong>Skills</strong></h2>
              <p class="mrgBtm20">
                Problem solving is not always about sitting in a board room talking about the way things should be done. I have a strong background in UI design which allows me to think on my feet and act upon it.

              </p>
              <div class="row">
                <div class="col-md-2 skilltitle">Photoshop</div>
                <div class="col-md-8">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" >
                      <span class="sr-only">90% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-2 skilltitle">Illustrator</div>
                <div class="col-md-8">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" >
                      <span class="sr-only">80% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-2 skilltitle">Indesign</div>
                <div class="col-md-8">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" >
                      <span class="sr-only">75% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" class="secPad white">
        <div class="container">
          <div class="heading text-center">
            <img src="logo512.png" alt="Avatar" class="avatar" />

            <h2>Ken Reagan Skills</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <h2>Programming <strong>Skills</strong></h2>
              <p class="mrgBtm20">
                It takes knowledge, smart work, and dedication to make great ideas come to life. I have been helping make great ideas happen for the past 7 years and am always ready for new challenges.

              </p>
              <div class="row">
                <div class="col-md-2 skilltitle">HTML5</div>
                <div class="col-md-8">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" >
                      <span class="sr-only">90% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-2 skilltitle">CSS/CC3</div>
                <div class="col-md-8">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" >
                      <span class="sr-only">90% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-2 skilltitle">JavaScript</div>
                <div class="col-md-8">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                      <span class="sr-only">80% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-2 skilltitle">jQuery/Ajax</div>
                <div class="col-md-8">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                      <span class="sr-only">90% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-2 skilltitle">Rust</div>
                <div class="col-md-8">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                      <span class="sr-only">90% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-2 skilltitle">Python</div>
                <div class="col-md-8">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                      <span class="sr-only">90% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <h2>Designing <strong>Skills</strong></h2>
              <p class="mrgBtm20">
                Problem solving is not always about sitting in a board room talking about the way things should be done. I have a strong background in UI design which allows me to think on my feet and act upon it.

              </p>
              <div class="row">
                <div class="col-md-2 skilltitle">Photoshop</div>
                <div class="col-md-8">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" >
                      <span class="sr-only">90% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-2 skilltitle">Illustrator</div>
                <div class="col-md-8">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" >
                      <span class="sr-only">80% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-2 skilltitle">Indesign</div>
                <div class="col-md-8">
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" >
                      <span class="sr-only">75% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
   
	

      

    </div >
    
  );
}

export default Body;