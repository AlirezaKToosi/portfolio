export default function ItemProject({ item }) {
  const { image_thumb_url, description } = item;

  return (
    <button className="item-project">
      <img src={image_thumb_url} />
      <h3>{description}</h3>
    </button>
  );
}