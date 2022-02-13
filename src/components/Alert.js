// Alert
export default function Alert(props) {
  function handleClick() {
    console.log('Clicked');
    alert(props.inputValue);
    console.log(props.inputValue);
    props.handleshowInputValue();
  }

  const inputChange = (event) => {
    props.setInputValue(event.target.value);
  };

  return (
    <>
      <button onClick={handleClick}> Button </button>
      <input type="text" onChange={inputChange} value={props.inputValue} />
    </>
  );
}
