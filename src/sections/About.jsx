import img from "/assets/AboutMe.jpg"
export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2>About</h2>
        <div className="content">
          <div className="paragraphs">
            <p>Hey there!</p>
            <p>
              I'm Alireza, a full-stack developer familiar with Java and React.
              This site is a showcase of my projects and skills. Take a look
              around, and if you're interested in collaborating, I'd love to
              hear from you soon!
            </p>
          </div>
          <img
            src={img}
            alt="silver-macbook-beside-orange-fruit-on-brown-wooden-table"
          />
        </div>
      </div>
    </section>
  );
}
