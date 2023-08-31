import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

function Projects() {
    const projectList = [
        {
            id: "card1",
            title: "Fiesta Flavors",
            image: "/images/music-app.png",
            desc: "Discover, save and organize your beloved recipes using an online platform. ",
            stack: ["sass", "react.js", "node.js", "express.js", "mongoDB", "cheerio"],
            website: ""
        },
        {
            id: "card2",
            title: "Epic Games clone",
            image: "",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus.",
            stack: ["tailwind", "react.js", "node.js", "express.js", "fetch api"],
            website: ""
        },
        {
            id: "card3",
            title: "Coming soon",
            image: "",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus.",
            stack: ["sass", "ejs", "node.js", "express.js", "mongoDB", "something.js"],
            website: ""
        }
    ];

    return (
        <section id="projects-container">
            <h3>projects</h3>

            <div className="projects-wrapper">
                {projectList.map((item) => (
                    <div className="card" id={item.id} key={item.id}>
                        <div className="card-img"></div>
                        <div className="details">
                            <div className="title-container">
                            <h4 className="h4">{item.title}</h4>
                            
                            <a href="#" className="link-button"><FaArrowUpRightFromSquare/></a>


                            </div>

                            <p>{item.desc}</p>

                            <h4 className="h4">Stack:</h4>
                            <ul>
                                {item.stack.map((stack, index) => {
                                    return <li className="li" key={index}>{stack}</li>
                                })}
                            </ul>
                            
                            
                        </div>
                    </div>
                ))}
            </div>

            <a className="github" target="_blank" rel="noreferrer" href="https://github.com/Staci082">
                <FaGithub />
            </a>
        </section>
    );
}

export default Projects;
