import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

function Projects() {
    const projectList = [
        {
            id: "card1",
            title: "Fiesta Flavors",
            image: "/images/fiestaflavors2.png",
            desc: "Discover, save and organize your beloved recipes using an online platform. ",
            stack: [
                "sass",
                "react.js",
                "node.js",
                "express.js",
                "mongoDB",
            ],
            website: "https://recipe-7mjl4ieqq-staci082s-projects.vercel.app/all",
        },
        {
            id: "card2",
            title: "Quizilla",
            image: "",
            desc: "Unleash your inner quizmaster and test your knowledge with this trivia app.",
            stack: [
                "tailwind",
                "react.js",
                "fetch api",
            ],
            website: "https://quizilla-git-main-staci082s-projects.vercel.app/",
        },
        {
            id: "card3",
            title: "Coming soon",
            image: "",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus.",
            stack: [
                "sass",
                "react.js",
                "node.js",
                "express.js",
                "mongoDB",
            ],
            website: "#projects-container",
        },
    ];
    
    return (
        <section id="projects-container">
            <h2>projects</h2>

            <div className="projects-wrapper">
                {projectList.map((item) => (
                    <div className="card" id={item.id} key={item.id}>
                        <div className="card-img-container"><img className="card-img" src={item.image} alt={item.id}/></div>
                        <div className="details">
                            <div className="title-container">
                                <h3 className="h3">{item.title}</h3>

                                <a target="_blank" rel="noreferrer" href={item.website} className="link-button" aria-label={`View ${item.title} live`}>
                                    <FaArrowUpRightFromSquare />
                                </a>
                            </div>

                            <p>{item.desc}</p>

                            <h3 className="h3">Stack:</h3>
                            <ul>
                                {item.stack.map((stack, index) => {
                                    return (
                                        <li className="li" key={index}>
                                            {stack}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            <a
                className="github"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Staci082"
            >
                <span className="sr-only">Visit my GitHub profile</span>
                <FaGithub />
            </a>
        </section>
    );
}

export default Projects;
