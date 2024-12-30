const InputToggle = ({labelText, name, defaultChecked= false}) => {
  return (
    <div className="form-control w-32 my-2">
        <span className="label-text">{labelText}</span>
      <label className="label cursor-pointer">
        <input type="checkbox" className="toggle toggle-lg toggle-primary" name={name} defaultChecked={defaultChecked} />
      </label>
    </div>
  );
};

export default InputToggle;
