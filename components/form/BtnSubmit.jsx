import { useFormStatus } from "react-dom";

const BtnSubmit = ({label}) => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-block btn-primary mt-5 text-white"
      disabled={pending}
    >
      {pending ? "Loading" : label}
    </button>
  );
};

export default BtnSubmit;
