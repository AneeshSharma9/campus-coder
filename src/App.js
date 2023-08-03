import "./App.css";
import Navbar from "./components/Navbar";
import { Account } from "./components/Account";

function App() {
    return (
        <Account>
            <div class="bgcolor">
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
                    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                    crossOrigin="anonymous"
                />
                <Navbar />
                <div class="image-container">
                    <img
                        src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
                        class="w-100"
                        alt=""
                    />
                    <span class="title">Campus Coder</span>
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
                <div class="container">
                    <div class="" id="about">
                        <p class="introtext mt-5">
                        Campus Coder bridges businesses and young tech minds, sparking innovation and unleashing boundless possibilities. We empower small businesses by connecting them with talented computer science students, providing cost-effective solutions while nurturing the next generation of tech leaders. Join our vibrant community of visionaries and changemakers today!
                        </p>
                    </div>

                    <h2 class="customh2">Why Campus Coder?</h2>
                    <p class="introtext">
                        Cost-Effective Solutions: Campus Coder offers a unique opportunity
                        for small businesses to access top-notch development services
                        without breaking the bank. By working with talented computer science
                        students, you can benefit from cost-effective solutions tailored to
                        your specific needs.
                        <br />
                        <br />
                        Supporting Aspiring Developers: When you choose Campus Coder, you're
                        not just getting a service; you're investing in the future of the
                        tech industry. By collaborating with enthusiastic students, you play
                        a crucial role in nurturing their skills and fostering their growth
                        as the tech superstars of tomorrow.
                        <br />
                        <br />
                        Freedom and Flexibility: We understand the challenges faced by small
                        businesses, and that's why we offer flexible timelines and options.
                        You can choose the best fit for your project and enjoy the freedom
                        to focus on your core business activities.
                        <br />
                        <br />
                        Empowering Collaboration: Campus Coder facilitates a vibrant
                        community of businesses and students, encouraging collaboration and
                        innovation. Together, we work towards creating solutions that drive
                        positive change and impact.
                        <br />
                        <br />
                    </p>

                    <h2 class="customh2" id="how">
                        How Does it Work?
                    </h2>
                    <p class="introtext">
                        Business Registration: To get started with Campus Coder, small
                        businesses need to register on our platform. The registration
                        process is simple and requires basic information about your company
                        and the type of project you need assistance with.
                        <br />
                        <br />
                        Project Submission: After registering, businesses can submit their
                        projects through the Campus Coder dashboard. Clearly outline the
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
                        Campus Coder aims to build lasting connections between businesses
                        and talented students.
                        <br />
                        <br />
                    </p>

                    <h2 class="customh2">FAQ</h2>
                    <p class="introtext">
                        1. How does Campus Coder ensure the quality of work delivered by
                        students?
                        <br />
                        <br />
                        We maintain a rigorous selection process for our student developers,
                        ensuring they possess the necessary skills and expertise.
                        Additionally, we encourage businesses to provide feedback on the
                        projects, and our team offers support and guidance throughout the
                        development process.
                        <br />
                        <br />
                        2. What types of projects can I request on Campus Coder?
                        <br />
                        <br />
                        Campus Coder offers a wide range of services, including website
                        development, automation scripts, and tackling small tasks. Whatever
                        your tech-related needs are, our talented students are eager to take
                        on the challenge.
                        <br />
                        <br />
                        3. How are projects priced on Campus Coder?
                        <br />
                        <br />
                        Projects on Campus Coder are priced at a fraction of the cost of
                        professional services. The exact pricing depends on the complexity
                        and scope of the project. Our aim is to provide affordable solutions
                        for small businesses while ensuring fair compensation for the
                        students' efforts.
                        <br />
                        <br />
                        4. Can I hire a student developer for a long-term project?
                        <br />
                        <br />
                        Absolutely! Campus Coder welcomes both short-term and long-term
                        projects. Whether you need a one-time task or ongoing development
                        support, our students are ready to collaborate according to your
                        project requirements.
                        <br />
                        <br />
                        5. Is there any support available for businesses using Campus Coder?
                        <br />
                        <br />
                        Yes, of course! Our dedicated support team is always available to
                        assist you with any questions or concerns you may have. We're
                        committed to ensuring a seamless experience for both businesses and
                        student developers on our platform.
                        <br />
                        <br />
                    </p>
                    <hr />
                </div>
            </div>
        </Account>
    );
}

export default App;
