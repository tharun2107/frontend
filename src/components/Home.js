import React from 'react';
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // External CSS file for custom styling
import Slider from "react-slick"; // Using react-slick for image slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../components/image1.jpeg";
import img2 from "../components/image2.jpeg";
import img3 from "../components/image3.jpeg";
function Home() {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500
    };

    return (
        <div>
            <Navbar />
            <h1 className="display-3 text-center mt-5 " style={{color: '#007bff'}}>Welcome to Expenses Tracker Website</h1>
            <div className="container text-center mt-5">
                <Slider {...sliderSettings}>
                    <div>
                        <img src={img1} alt="slide1" />
                    </div>
                    <div>
                        <img src={img2} alt="slide2" />
                    </div>
                    <div>
                        <img src={img3} alt="slide3" />
                    </div>
                </Slider>
               
            </div>
            <section className="features-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="feature-item">
                            <div className="feature-card">
                                <i className="fas fa-receipt"></i>
                                <h3>Record Expenses</h3>
                                <p>Effortlessly record your expenses with our intuitive interface. Categorize and track your spending with ease.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="feature-item">
                            <div className="feature-card">
                                <i className="fas fa-chart-line"></i>
                                <h3>Graphical Analysis</h3>
                                <p>Gain insights into your spending habits with our graphical analysis tools. Visualize your expenses over time and make informed decisions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="feature-item">
                            <div className="feature-card">
                                <i className="fas fa-list"></i>
                                <h3>Expenses List</h3>
                                <p>View a detailed list of your expenses, sorted by category or date. Easily search and filter your expenses to find what you need.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p>&copy; 2024 Expenses Tracker. All rights reserved.</p>
                    </div>
                    <div className="col-md-6">
                        <ul className="footer-links">
                            <li><a href="/home">Privacy Policy</a></li>
                            <li><a href="/home">Terms of Service</a></li>
                            <li><a href="/contactus">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        </div>
    );
}

export default Home;

// import React from 'react';
// import Navbar from './Navbar';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './Home.css'; // Import CSS file for styling
// import 'bootstrap/dist/css/bootstrap.min.css';
// function Home() {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000
//     };

//     return (
//         <div>
//             <Navbar />
//             {/* <div className="landing-page">
//                 <div >
//                 <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
//                 <div className="carousel-inner">
//                     <div className="carousel-item active">
//                         <img src="./image1.jpeg" className="d-block w-100" alt="Slide 1" />
//                     </div>
//                     <div className="carousel-item">
//                         <img src="./image2.jpeg" className="d-block w-100" alt="Slide 2" />
//                     </div>
//                     <div className="carousel-item">
//                         <img src="./image3.jpeg" className="d-block w-100" alt="Slide 3" />
//                     </div>
//                 </div>
//             </div>

//                 </div>
//                 <div className="container text-center">
//                     <h1>Welcome to Expenses Tracker Website</h1>
//                     <p className="lead">Track your expenses and manage your finances with ease.</p>
//                     <a href="/recordexpense" className="btn btn-primary btn-lg">Get Started</a>
//                 </div>
//                 <div className="testimonial-section">
//                     <div className="container">
//                         <h2>What Our Customers Say</h2>
//                         <div className="testimonial">
//                             <p>"I love using Expenses Tracker! It has made managing my finances so much easier."</p>
//                             <p className="customer-name">- John Doe</p>
//                         </div>
//                         <div className="testimonial">
//                             <p>"The user interface is intuitive and the features are powerful. Highly recommended!"</p>
//                             <p className="customer-name">- Jane Smith</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="contact-section">
//                     <div className="container text-center">
//                         <h2>Contact Us</h2>
//                         <p>Have questions? We're here to help! Contact our support team.</p>
//                         <p>Email: support@expensetracker.com | Phone: 1-800-123-4567</p>
//                     </div>
//                 </div>
//             </div> */}
//         </div>
//     );
// }

// export default Home;
