import { useFormStatus } from "react-dom";

const BtnSubmit = ({ label }) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="relative w-full px-6 py-4 bg-primary text-white font-medium rounded-xl
        transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70
        disabled:cursor-not-allowed disabled:transform-none"
    >
      {pending && (
        <span className="absolute inset-0 flex items-center justify-center">
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        </span>
      )}
      <span className={pending ? "opacity-0" : ""}>{label}</span>
    </button>
  );
};

export default BtnSubmit;
