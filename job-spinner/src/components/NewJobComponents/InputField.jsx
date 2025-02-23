/* eslint-disable react/prop-types */
export default function InputField({
  formik,
  name,
  type,
  lab,
  placeholder,
  options,
}) {
  const { errors, values, touched, handleChange, handleBlur } = formik;

  return (
    <div className="w-full flex flex-col items-start gap-2 px-6x">
      <label className="text-xs lg:text-sm font-bold tracking-[1px] text-blue-700/[.8]">
        {lab}
      </label>

      {type === "select" ? (
        <select
          id={name}
          className="w-full border-2 border-gray-950/[.1] outline-none rounded-md px-3 py-2 text-xs lg:text-base 
            tracking-[0.8px] placeholder:text-gray-700 text-gray-700/[.8] placeholder:text-xs cursor cursor-pointer"
          value={values[name]}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          className="w-full border-2 border-gray-950/[.1] outline-none rounded-md px-3 py-2 text-xs lg:text-base 
            tracking-[0.8px] placeholder:text-gray-700 text-gray-700/[.8] placeholder:text-xs"
          value={values[name]}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      )}

      {touched[name] && Boolean(errors[name]) && (
        <span className="text-sm text-red-500">{String(errors[name])}</span>
      )}
    </div>
  );
}
