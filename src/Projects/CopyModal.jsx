function CopyModal(props) {
  return (
    <div className="modal-overlay ">
      <div className="modal-content ">
        <p>Click on the RGB to copy it!</p>
        <button onClick={props.onGotItClick}>Got it</button>
      </div>
    </div>
  );
}
export default CopyModal;
