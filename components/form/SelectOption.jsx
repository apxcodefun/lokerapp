const SelectOption = ({name, labelText, defaultValue, list }) => {
  return (
    <label className="form-control w-full">
      <div className="label my-3">
        <span className="label-text">{labelText}</span>
      </div>
      <select
        name={name}
        className="select select-bordered"
        defaultValue={defaultValue}
      >
        {list.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export default SelectOption;

  
