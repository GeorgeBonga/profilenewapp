import React from 'react'
import FontAwesome from 'react-fontawesome'
// import faStyles from 'font-awesome/css/font-awesome.css'
import logo from "../logo.svg"
import './Body.css';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Body() {
  return (
    <div >

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

{/* Bonga */}
      <section id="skills" class="secPad white">
        <div class="container">
          <div class="heading text-center">
          <img src="bonga.jpg" alt="Avatar" class="avatar" />
            <h2>George Bonga Skills</h2>
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
      {/* ken */}
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

    </div>
  );
}

export default Body;