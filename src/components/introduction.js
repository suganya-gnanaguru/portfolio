import aboutMe from '../images/about-me.png';

export default function Introduction() {
    return (
        <section className="flex flex-col md:flex-row darkTheme text-2xl" id="Introduction">
            <div className="w-full md:w-2/3 py-[2%]">
                <p className="heading underline font-extrabold">About Me</p>
                <ul className="list-disc pl-5 mt-[2%]  text-base text-justify ">
                   <li className="textTransform">
                        <p>Greetings! I'm Suganya from Sivakasi, an accomplished Front-end Developer and Designer with a passion for creating exceptional websites that blend cutting-edge technology with elegant design aesthetics. </p>
                    </li>
                   <li className="textTransform">
                        <p>With over 6 years of hands-on experience, I specialize in AngularJS, Angular, and ReactJS, harnessing their power to deliver seamless user experiences and responsive layouts.</p>
                    </li>
                   <li className="textTransform">
                        <p>My proficiency spans a wide array of front-end technologies including HTML5, CSS3, SCSS, Bootstrap5, and Tailwind CSS, ensuring that every project I undertake is not only visually captivating but also technically robust and adaptable to various devices and screen sizes. </p>
                    </li>
                   <li className="textTransform">
                        <p>I am skilled in JavaScript and TypeScript, employing them to enhance functionality, interactivity, and performance optimization.</p>
                    </li>
                   <li className="textTransform">
                        <p>In addition to my technical prowess, I possess strong problem-solving skills honed through years of tackling complex challenges in web development. I excel in diagnosing issues, devising effective solutions, and implementing them efficiently to ensure project timelines and quality standards are met.</p>
                    </li>
                   <li className="textTransform">
                        <p>I am also proficient in Git and GitHub for efficient version control and collaboration, enabling streamlined workflows and project scalability. </p>
                    </li>
                   <li className="textTransform">
                        <p>As a mentor, I take pride in guiding junior engineers, fostering their growth and promoting a collaborative team environment.</p>
                    </li>
                   <li className="textTransform">
                        <p>Throughout my career, I have excelled in tailoring solutions that precisely align with client requirements, whether creating from scratch or enhancing existing frameworks. </p>
                    </li>
                   <li className="textTransform">
                        <p>My dedication to understanding client needs ensures that each project achieves its strategic objectives while exceeding expectations in usability and visual appeal.</p>
                    </li>
                   <li className="textTransform">
                        <p>I thrive on tackling new challenges and staying abreast of emerging trends in front-end development, continuously honing my skills to deliver innovative solutions that push boundaries and set benchmarks in the industry.</p>
                    </li>
                </ul>

            </div>
            <div className="w-full md:w-1/3 py-[2%]">
                <div className="w-full md:m-[15%]">
                    <img  src={aboutMe} alt="backdrop" className='m-[2%] md:mt-[55%] md:mx-[5%]'/>
                </div>
            </div>
        </section>
    );
}