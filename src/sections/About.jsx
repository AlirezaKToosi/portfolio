import Image from "../assets/about.png";

export default function About() {
  return (
    <section className="about">
      <div className="container">
        <h2>About</h2>
        <div className="content">
          <p>
            Experienced developer proficient in Java, Object-Oriented
            Programming (OOP), Spring Framework, Hibernate, Docker, HTML, CSS,
            React, and JavaScript, with over 4 years of hands-on experience
            across diverse sectors including banking, healthcare, insurance, and
            investment. I possess a robust academic background with 6 years of
            dedicated study in Computer Science, culminating in a Bachelor's
            degree in Software Engineering and a Master's degree in Artificial
            Intelligence.
          </p>
          <p>
            Adaptable and collaborative, I thrive in fast-paced, dynamic
            environments, eager to contribute my skills to the entire software
            development lifecycle—from design and planning to testing and
            deployment. Driven by a passion for software development, I am keen
            on leveraging my expertise as a Java Back-end Developer within a
            programming group, utilizing my knowledge to drive innovation and
            contribute meaningfully to projects. I am enthusiastic about
            exchanging ideas with teammates, continuously learning, and
            fostering a culture of excellence.
          </p>
          <img
            src={Image}
            alt="A blue all in one computer with some decoration elements"
          />
        </div>
      </div>
    </section>
  );
}
