const SelectList = ({ name, labelText, defaultValue, list }) => {
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
          return <option key={item._id} value={item._id}>{item.name}</option>;
        })}
      </select>
    </label>
  );
};

export default SelectList;
