function Skills() {
    
    const skillsList = [
        {
            name: "HTML",
            image: "/images/skills/html.png",
        },
        {
            name: "CSS",
            image: "/images/skills/CSS3.png",
        },
        {
            name: "SASS",
            image: "/images/skills/sass.png",
        },
        {
            name: "Tailwind",
            image: "/images/skills/tailwind.png",
        },
        {
            name: "React",
            image: "/images/skills/react.png",
        },
        {
            name: "Javascript",
            image: "/images/skills/javascript.png",
        },
        {
            name: "Node.js",
            image: "/images/skills/node.png",
        },
        {
            name: "Express.js",
            image: "/images/skills/node.png",
        },
        {
            name: "Mongo DB",
            image: "/images/skills/mongo-db.png",
        },
        {
            name: "Git",
            image: "/images/skills/git.png",
        },
    ];

    return (
        <section id="skills-container">
            
            <h3>exprience with</h3>

            <div className="skills">

            {skillsList.map((item) => (
                <div className="hex"  key={item.name}>
                    <div className="shape" >
                        <img src={item.image} alt="" />
                    </div>
                    <h4 className="item-name">{item.name}</h4>
                </div>
            ))}

            </div>
        </section>
    );
}

export default Skills;
