import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

function Projects() {
    const projectList = [
        {
            id: "card1",
            title: "Fiesta Flavors",
            image: "/images/fiestaflavors2.avif",
            desc: "Discover, save and organize your beloved recipes using this online CRUD application. ",
            stack: [
                "sass",
                "react.js",
                "node.js",
                "express.js",
                "mongoDB",
            ],
            website: "https://fiesta-flavors.vercel.app/",
        },
        {
            id: "card2",
            title: "Coming soon",
            image: "",
            desc: "An online Pictionary multiplayer game where players draw and guess words in a fun virtual environment.",
            stack: [
                "tailwind",
                "react.js",
                "typescript",
                "node.js",
                "express.js",
                "socket.io"
            ],
            website: "#projects-container",
        },
        {
            id: "card3",
            title: "Coming soon",
            image: "",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus.",
            stack: [],
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
