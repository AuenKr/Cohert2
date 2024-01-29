/* eslint-disable react/prop-types */
function Appbar({ username }) {
  return (
    <div className="text-2xl shadow flex justify-between h-full p-1 rounded-lg">
      <div className="flex items-center">PayTM App</div>
      <div className="flex">
        Hello
        <div className="mx-1 px-2 border-2 bg-slate-300 rounded-full flex justify-center items-center">
          {username[0]}
        </div>
      </div>
    </div>
  );
}

export default Appbar;
