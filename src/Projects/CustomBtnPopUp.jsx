function CustomBtnPopUp({
  newLabel,
  newValue,
  setNewLabel,
  setNewValue,
  onSave,
  onCancel,
}) {
  return (
    <div className="customBtnPopUp-overlay">
      <h3>create new Button</h3>
      <div className="customBtnPopUp-content">
        <input
          type="text"
          placeholder="Button name for example +67 or count to the power of 21"
          value={newLabel}
          onChange={(e) => setNewLabel(e.target.value)}
        />
        <input
          type="text"
          placeholder="Value"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
        />
        <button className="saveBtn" onClick={onSave}>
          save
        </button>
        <button className="cancelBtn" onClick={onCancel}>
          cancel
        </button>
      </div>
    </div>
  );
}
export default CustomBtnPopUp;
