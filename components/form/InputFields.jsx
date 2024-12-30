const InputFields = ({label, type, placeholder, defaultValue, name}) => {
  return (
    <label className="form-control w-full mt-2">
      <div className="label my-3">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        defaultValue={defaultValue || null}
        className="input input-bordered w-full"
      />
    </label>
  );
};

export default InputFields;
