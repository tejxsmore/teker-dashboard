export default function Sidebar() {
  return (
    <div className="fixed p-4 w-64 h-full bg-blue text-white rounded-tr-lg">
      <h2 className="p-2 pl-0 text-lg font-bold cursor-pointer">Overview</h2>
      <h2 className="p-2 pl-0 text-lg font-bold">Products</h2>
      <ul className="mt-2">
        <li className="p-2 pl-0">Home</li>
        <li className="p-2 pl-0">About</li>
        <li className="p-2 pl-0">Contact</li>
      </ul>
    </div>
  );
}
