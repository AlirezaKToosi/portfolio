// Project files
import Data from "../data/projects.json";
import ItemProject from "../components/ItemProject";

export default function Projects({ setModal }) {
  // Components
  const Items = Data.map((item) => (
    <ItemProject key={item.id} item={item} setModal={setModal} />
  ));

  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="content">
          <p>
            Here are the projects I have already done during the frontend and backend course at
            Novare potential and Lexicon.
          </p>
          <div className="items">{Items}</div>
        </div>
      </div>
    </section>
  );
}
