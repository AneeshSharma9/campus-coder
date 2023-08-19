import "./App.css";
import Navbar from "./components/Navbar";
import { Account } from "./components/Account";

function App() {
    return (
        <Account>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
            <div class="bgcolor">

                <Navbar />
                <div class="image-container">
                    <img
                        src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
                        class="w-100"
                        alt=""
                    />
                    <span class="title">Propello</span>
                    <span class="tagline">Spark innovation together.</span>
                    <div class="main-button homepage-button1">
                        <a class="colorchange nav-link" href="#about">
                            About
                        </a>
                    </div>
                    <div class="other-button homepage-button2">
                        <a class="colorchange-black nav-link" href="#how">
                            How Does it Work?
                        </a>
                    </div>
                </div>
                <div id="about"></div>
                <div class="section-bg" >
                    <h2 class="customh2 text-center homepage-offset " >About Propello</h2>
                    <p class="introtext pb-5">
                        Propello bridges businesses and young tech minds, sparking innovation and unleashing boundless possibilities. We empower small businesses by connecting them with talented computer science students, providing cost-effective solutions while nurturing the next generation of tech leaders. Join our vibrant community of visionaries and changemakers today!
                    </p>
                </div>

                <h2 class="customh2 text-center">Why Propello?</h2>
                <div class="homepage-card-container">
                    <div class="card homepage-card p-5">
                        <h5 className="card-title text-center mb-4">Cost-Effective Solutions</h5>
                        <p>Propello offers a unique opportunity
                            for small businesses to access top-notch development services
                            without breaking the bank. By working with talented computer science
                            students, you can benefit from cost-effective solutions tailored to
                            your specific needs.</p>
                    </div>
                    <div class="card homepage-card p-5">
                        <h5 className="card-title text-center mb-4">Supporting Aspiring Developers</h5>
                        <p>When you choose Propello, you're
                            not just getting a service; you're investing in the future of the
                            tech industry. By collaborating with enthusiastic students, you play
                            a crucial role in nurturing their skills and fostering their growth
                            as the tech superstars of tomorrow.</p>
                    </div>
                    <div class="card homepage-card p-5">
                        <h5 className="card-title text-center mb-4">Freedom and Flexibility</h5>
                        <p>We understand the challenges faced by small
                            businesses, and that's why we offer flexible timelines and options.
                            You can choose the best fit for your project and enjoy the freedom
                            to focus on your core business activities.</p>
                    </div>
                    <div class="card homepage-card p-5">
                        <h5 className="card-title text-center mb-4">Empowering Collaboration</h5>
                        <p>Propello facilitates a vibrant
                            community of businesses and students, encouraging collaboration and
                            innovation. Together, we work towards creating solutions that drive
                            positive change and impact.</p>
                    </div>
                </div>

                <div class="homepage-offset" id="how"></div>
                <div class="section-bg">
                    <h2 class="customh2 text-center pt-5" >
                        How Does it Work?
                    </h2>
                    <p class="introtext">
                        Business Registration: To get started with Propello, small
                        businesses need to register on our platform. The registration
                        process is simple and requires basic information about your company
                        and the type of project you need assistance with.
                        <br />
                        <br />
                        Project Submission: After registering, businesses can submit their
                        projects through the Propello dashboard. Clearly outline the
                        project's scope, requirements, and any specific skills you're
                        looking for in a student developer.
                        <br />
                        <br />
                        Student Matching: Once the project is submitted, our platform's
                        intelligent matching algorithm identifies the most suitable student
                        developers based on their skills and expertise. We consider factors
                        such as programming languages, development experience, and past
                        projects to ensure a perfect fit.
                        <br />
                        <br />
                        Review and Selection: Businesses receive a list of potential student
                        developers along with their profiles and project proposals. Review
                        the proposals and choose the candidate that best aligns with your
                        project vision.
                        <br />
                        <br />
                        Project Collaboration: After selecting a student developer, you'll
                        collaborate closely with them through our platform. You can discuss
                        project details, set milestones, and communicate seamlessly
                        throughout the development process.
                        <br />
                        <br />
                        Development Phase: The student developer starts working on your
                        project, utilizing their skills and creativity to bring your vision
                        to life. They may seek your feedback at various stages to ensure the
                        final product meets your expectations.
                        <br />
                        <br />
                        Quality Assurance: While students are talented and passionate, we
                        understand the importance of quality assurance. Our support team
                        monitors projects to ensure they meet the desired standards,
                        providing guidance and assistance to students when needed.
                        <br />
                        <br />
                        Project Completion: Once the project is completed, you'll have the
                        opportunity to review the deliverables and provide feedback. If
                        everything meets your satisfaction, the project will be marked as
                        complete.
                        <br />
                        <br />
                        Feedback and Rating: We encourage businesses to provide feedback on
                        their experience working with the student developer. This not only
                        helps improve our platform but also serves as valuable input for the
                        student's future endeavors.
                        <br />
                        <br />
                        Long-Term Collaboration: If you had a positive experience with a
                        particular student developer, you can choose to work with them on
                        future projects or hire them for long-term development support.
                        Propello aims to build lasting connections between businesses
                        and talented students.
                        <br />
                        <br />
                    </p>
                </div>


                <h2 class="customh2 text-center">FAQ</h2>
                <div id="accordion" class="faq">
                    <div class="card faq-item">
                        <div class="card-header" id="headingOne">
                            <h5 class="mb-0">
                                <button class="btn btn-link w-100 h-100 text-left" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    How does Propello ensure the quality of work delivered by students?
                                </button>
                            </h5>
                        </div>

                        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                            <div class="card-body">
                                We maintain a rigorous selection process for our student developers, ensuring they possess the necessary skills and expertise. Additionally, we encourage businesses to provide feedback on the projects, and our team offers support and guidance throughout the development process.
                            </div>
                        </div>
                    </div>
                    <div class="card faq-item">
                        <div class="card-header" id="headingTwo">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed w-100 h-100 text-left" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    What types of projects can I request on Propello?
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div class="card-body">
                                Propello offers a wide range of services, including website development, automation scripts, and tackling small tasks. Whatever your tech-related needs are, our talented students are eager to take on the challenge.
                            </div>
                        </div>
                    </div>
                    <div class="card faq-item">
                        <div class="card-header" id="headingThree">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed w-100 h-100 text-left" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    How are projects priced on Propello?
                                </button>
                            </h5>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                            <div class="card-body">
                                Projects on Propello are priced at a fraction of the cost of professional services. The exact pricing depends on the complexity and scope of the project. Our aim is to provide affordable solutions for small businesses while ensuring fair compensation for the students' efforts.
                            </div>
                        </div>
                    </div>
                    <div class="card faq-item">
                        <div class="card-header" id="headingFour">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed w-100 h-100 text-left" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Can I hire a student developer for a long-term project?
                                </button>
                            </h5>
                        </div>
                        <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                            <div class="card-body">
                                Absolutely! Propello welcomes both short-term and long-term projects. Whether you need a one-time task or ongoing development support, our students are ready to collaborate according to your project requirements.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Account>
    );
}

export default App;
