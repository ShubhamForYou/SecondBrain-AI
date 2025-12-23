export const Input = ({
  onChange,
  placeholder,
}: {
  onChange: () => void;
  placeholder: string;
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className="  px-4 py-2 rounded  border border-purple-400 outline-none text-slate-700"
        onChange={onChange}
      />
    </div>
  );
};
