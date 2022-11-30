import "./Slider.css"

export default function Slider ({ frame, setFrame }) {
  const handleSwitch = (number) => {
    if (number === 0) {
      setFrame(0)
      document.querySelector('.switch > input').checked = false
    }
    else {
      setFrame(1)
      document.querySelector('.switch > input').checked = true 
    } 
  }

  return (
    <div className="toggle">
      <button onClick={() => handleSwitch(0)}>Annually</button>
      <label className="switch">
        <input 
          id="check" 
          type="checkbox"
          onClick={() => handleSwitch(frame === 0 ? 1 : 0)}
        />
        <span className="slider round"></span>
      </label>
      <button onClick={() => handleSwitch(1)}>Monthly</button>
    </div>
  )
}