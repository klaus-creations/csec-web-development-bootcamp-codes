export default function App() {
  const arr = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const handleClick = function (e) {};
  return (
    <div className="flex items-center">
      {arr.map((el, i) => (
        <div key={i} className="text-red-500">
          {el}
        </div>
      ))}
    </div>
  );
}
