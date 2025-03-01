/* eslint-disable react/prop-types */
export default function InputField({ formik, name, type, lab, placeholder }) {
  const { errors, values, touched, handleChange, handleBlur, ...props } =
    formik;
  return (
    <div className="w-full flex flex-col items-start gap-2 px-6x">
      <label className="text-xs lg:text-base font-bold tracking-[1px] text-gray-800">
        {lab}
      </label>
      <input
        className="w-full border-2 border-gray-950/[.5] outline-none rounded-md px-3 py-2 text-xs lg:text-base 
        tracking-[0.8px] placeholder:text-gray-700"
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        {...props}
      />
      {touched[name] && Boolean(errors[name]) && (
        <span className="text-sm text-red-500">{String(errors[name])}</span>
      )}
    </div>
  );
}
