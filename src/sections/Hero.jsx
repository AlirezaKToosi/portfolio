export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <h1>
          Hi I’m
          <br />
          Alireza
        </h1>
        <p className="subtitle">
          A Fullstack developer 
          <br />
          Crafting Digital Solutions with Passion and Precision
        </p>
      </div>
    </section>
  );
}

/**
 * Some tips about stylizing headings
 *
 * The heading 1 text is just one sentence,
 * but I want to stylize it and show it in 2 lines
 * by using the <br/> tag.
 *
 * If is actually 2 separate sentences, use
 * <span className="subtitle"> to write the 2nd line
 */
