export default function Card ({ price, text }) {
  return (
    <div className="card">
      <h2 className="card__type">{text.type}</h2>
      <h2 className="card__price">{price}</h2>
      <p>{text.storage}</p>
      <p>{text.users}</p>
      <p>{text.send}</p>
      <button className="card__btn">LEARN MORE</button>
    </div>
  )
}