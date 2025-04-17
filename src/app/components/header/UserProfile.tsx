import UserDropdown from "./UserDropDown";

export default function UserProfile() {
  return (
    <div className="flex items-center gap-4">
      <UserDropdown />
      <div className="font-medium hidden sm:block">
        <h2 className="text-[#4f7a44] font-bold">Eliana Navarro</h2>
        <p className="text-gray-500 text-sm font-normal">Docente primaria</p>
      </div>
    </div>
  );
}
