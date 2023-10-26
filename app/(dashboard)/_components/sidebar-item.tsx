import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
  const pathName = usePathname();
  const router = useRouter();

  const isActive =
    // check if its root page
    (pathName === "/" && href === "/") ||
    // check if its other route
    pathName === href ||
    // check if its sub route
    pathName.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      type='button'
      className={cn(
        "flex items-center gap-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
        isActive &&
          "text-orange-700 bg-orange-200/20 hover:bg-orange-200/20 hover:text-orange-700"
      )}
    >
      <div className='flex items-center gap-x-2 py-4'>
        <Icon
          size={22}
          className={cn("text-slate-500", isActive && "text-orange-700")}
        />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-4 border-orange-700 h-[3.4rem] transition-all",
          isActive && "opacity-100"
        )}
      />
    </button>
  );
};

export default SidebarItem;
