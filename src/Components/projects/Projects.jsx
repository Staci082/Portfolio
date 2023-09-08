import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

function Projects() {
    const projectList = [
        {
            id: "card1",
            title: "Fiesta Flavors",
            image: "/images/music-app.png",
            desc: "Discover, save and organize your beloved recipes using an online platform. ",
            stack: [
                "sass",
                "react.js",
                "node.js",
                "express.js",
                "mongoDB",
                "cheerio",
            ],
            website: "",
            tabindex: 1,
        },
        {
            id: "card2",
            title: "Epic Games clone",
            image: "",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus.",
            stack: [
                "tailwind",
                "react.js",
                "node.js",
                "express.js",
                "fetch api",
            ],
            website: "",
            tabindex: 2
        },
        {
            id: "card3",
            title: "Coming soon",
            image: "",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus.",
            stack: [
                "sass",
                "ejs",
                "node.js",
                "express.js",
                "mongoDB",
                "something.js",
            ],
            website: "",
            tabindex: 3
        },
    ];

    return (
        <section id="projects-container">
            <h2>projects</h2>

            <div className="projects-wrapper">
                {projectList.map((item) => (
                    <div className="card" id={item.id} key={item.id} tabIndex={item.tabindex}>
                        <div className="card-img"></div>
                        <div className="details">
                            <div className="title-container">
                                <h3 className="h3">{item.title}</h3>

                                <a href="#" className="link-button" id={item.title}>
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
