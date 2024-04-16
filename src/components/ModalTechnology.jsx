export default function ModalTechnology({ item }) {
  const { description, title } = item;

  return (
    <div className="modal-technology">
      <h3>{title}</h3>
      <h3>{description}</h3>
    </div>
  );
}
