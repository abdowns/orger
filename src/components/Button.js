import './Button.css'

export default function Button({callback, text}){
  return (
    <div>
      <button className="button" onClick={callback}>
        {text}
      </button>
    </div>
  );
}