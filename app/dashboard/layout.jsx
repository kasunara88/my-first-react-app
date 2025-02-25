import SidePanel from "./components/side-panel";
import UserNev from "./components/user-nev";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex max-h-screen overflow-hidden bg-green-100">
      <aside className="w-64 overflow-y-auto border-r bg-slate-100 shadow-lg">
        <SidePanel />
      </aside>
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="bg-slate-50 flex h-16 items-center justify-between gap-4 border-b px-6 shadow-sm">
          <h1 className="text-2xl font-bold text-blue-900">FlexZone</h1>
          <UserNev />
        </header>
        <main className="flex flex-1 overflow-y-auto bg-gray-200 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
