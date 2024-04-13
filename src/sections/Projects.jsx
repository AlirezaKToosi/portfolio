import Data from "../data/projects.json";

export default function Projects() {
  const items = Data.map((item) => (
    <article className="item-project" key={item.id}>
      <img src={item.image_thumb_url} />
      <h3>{item.description}</h3>
    </article>
  ));
  return (
    <section className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="content-grid">
          <p>Here are my projects .</p>
          <div className="items-grid">{items}</div>
        </div>
      </div>
    </section>
  );
}
