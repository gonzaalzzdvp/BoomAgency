export default function Carousel({ image, text, name }) {
  return (
    <div className="card">
      <img src={image} className="card-image" alt={text} />
      <p className="card-text">{name}</p>
      <p className="card-text">{text}</p>
    </div>
  );
}
