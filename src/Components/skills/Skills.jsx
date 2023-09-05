function Skills() {
    const skillsList = [
        {
            name: "HTML",
            image: "/images/skills/html.png",
            alt: "HTML logo"
        },
        {
            name: "CSS",
            image: "/images/skills/CSS3.png",
            alt: "CSS logo"
        },
        {
            name: "SASS",
            image: "/images/skills/sass.png",
            alt: "Sass logo"
        },
        {
            name: "Tailwind",
            image: "/images/skills/tailwind.png",
            alt: "Tailwind logo"
        },
        {
            name: "Javascript",
            image: "/images/skills/javascript.png",
            alt: "Javascript logo"
        },
        {
            name: "React.js",
            image: "/images/skills/react.png",
            alt: "React.js logo"
        },
        {
            name: "Node.js",
            image: "/images/skills/node.png",
            alt: "Node.js logo"
        },
        {
            name: "Express.js",
            image: "/images/skills/node.png",
            alt: "Express.js logo"
        },
        {
            name: "Mongo DB",
            image: "/images/skills/mongo-db.png",
            alt: "Mongo Database logo"
        },
        {
            name: "Git",
            image: "/images/skills/git.png",
            alt: "Git logo"
        },
    ];

    return (
        <>
            <section id="skills-container">
                <h2>exprience with</h2>

                <div className="skills">
                    {skillsList.map((item) => (
                        <div className="hex" key={item.name}>
                            <div className="shape">
                                <img src={item.image} alt={item.alt} />
                            </div>
                            <h3 className="item-name">{item.name}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Skills;
