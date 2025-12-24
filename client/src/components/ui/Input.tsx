export const Input = ({
  onChange,
  placeholder,
  reference,
}: {
  onChange: () => void;
  placeholder: string;
  reference?: any;
}) => {
  return (
    <div>
      <input
        ref={reference}
        type="text"
        placeholder={placeholder}
        className="  px-4 py-2 rounded  border border-purple-400 outline-none text-slate-700"
        onChange={onChange}
      />
    </div>
  );
};
