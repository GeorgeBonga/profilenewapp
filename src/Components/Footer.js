import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Footer() {
    return (


        <section class="footer-clean">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"></link>


            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Devops</a></li>
                            <li><a href="#">Web Hosting</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Data</h3>
                        <ul>
                            <li><a href="#">Data Visualization</a></li>
                            <li><a href="#">Data Analysis</a></li>
                            <li><a href="#">Shared Hosting</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Softwares</h3>
                        <ul>
                            <li><a href="#">Hotel Management System</a></li>
                            <li><a href="#">Rent Management System</a></li>
                            <li><a href="#">POS softwares</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>System Management</h3>
                        <ul>
                            <li><a href="#">Automated Testing</a></li>
                            <li><a href="#">System Monitoring</a></li>
                            <li><a href="#">Payment Integration</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 item social"><a href="https://facebook.com"><i class="icon ion-social-facebook"></i></a><a href="https://twitter.com/KenLumuli"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a>
                        <p class="copyright">Mutabletechke©2022</p>
                    </div>
                </div>
            </div>

       
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        </section>

        // {/* <script type="text/javascript">
        //     const tabs = document.querySelectorAll('[data-tab-value]')
        //     const tabInfos = document.querySelectorAll('[data-tab-info]')

        // 	tabs.forEach(tab => {
        //         tab.addEventListener('click', () => {
        //             const target = document.querySelector(tab.dataset.tabValue);
        //             tabInfos.forEach(tabInfo => {
        //                 tabInfo.classList.remove('active')
        //             })
        //             target.classList.add('active');
        //         })
        //     })
        // </script> */}


        //   </div>
    );
}

export default Footer;