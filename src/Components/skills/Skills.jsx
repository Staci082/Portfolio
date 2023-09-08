function Skills() {
    const skillsList = [
        {
            name: "HTML",
            image: "/images/skills/html.avif",
            alt: "HTML logo"
        },
        {
            name: "CSS",
            image: "/images/skills/CSS3.avif",
            alt: "CSS logo"
        },
        {
            name: "SASS",
            image: "/images/skills/sass.avif",
            alt: "Sass logo"
        },
        {
            name: "Tailwind",
            image: "/images/skills/tailwind.avif",
            alt: "Tailwind logo"
        },
        {
            name: "Javascript",
            image: "/images/skills/javascript.avif",
            alt: "Javascript logo"
        },
        {
            name: "React.js",
            image: "/images/skills/react.avif",
            alt: "React.js logo"
        },
        {
            name: "Node.js",
            image: "/images/skills/node.avif",
            alt: "Node.js logo"
        },
        {
            name: "Express.js",
            image: "/images/skills/node.avif",
            alt: "Express.js logo"
        },
        {
            name: "Mongo DB",
            image: "/images/skills/mongo-db.avif",
            alt: "Mongo database logo"
        },
        {
            name: "Git",
            image: "/images/skills/git.avif",
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
