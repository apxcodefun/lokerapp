
const TextAreaField = ({label,name,defaultValue, placeholder}) => {
  return (
    <label className="form-control">
  <div className="label">
    <span className="label-text">{label}</span>
  </div>
  <textarea name={name} defaultValue={defaultValue || null} className="textarea textarea-bordered h-24" placeholder={placeholder}></textarea>
</label>
  )
}

export default TextAreaField