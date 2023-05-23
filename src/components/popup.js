import "./popup.css";

export default function Popup({ title, state }) {
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      const input = document.getElementById("popup-input").value;

      state(input);
    }
  }

  return (
    <div className="popup-box">
      <p className="popup-title"> {title} </p>

      <input
        type="text"
        className="popup-input"
        id="popup-input"
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}
