"use client";

import { signOut } from "next-auth/react";
import { Menu, Bell, LogOut, User, Settings, ChevronDown } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import Link from "next/link";

interface HeaderProps {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
  onMenuClick: () => void;
  title?: string;
}

export function Header({ user, onMenuClick, title }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-gray-200 bg-white px-4 sm:px-6">
      {/* Mobile menu button */}
      <button
        className="lg:hidden rounded-lg p-2 text-gray-500 hover:bg-gray-100"
        onClick={onMenuClick}
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Page title */}
      {title && (
        <div className="hidden sm:block">
          <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
        </div>
      )}

      {/* Right side */}
      <div className="ml-auto flex items-center gap-3">
        {/* Notifications */}
        <button className="relative rounded-lg p-2 text-gray-500 hover:bg-gray-100 transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary-500" />
        </button>

        {/* User menu */}
        <DropdownMenu
          trigger={
            <button className="flex items-center gap-2.5 rounded-xl px-2 py-1.5 hover:bg-gray-100 transition-colors">
              <Avatar name={user.name} src={user.image} size="sm" />
              <div className="hidden sm:block text-left">
                <p className="text-sm font-medium text-gray-900 leading-tight">
                  {user.name ?? "Usuário"}
                </p>
                <p className="text-xs text-gray-500 leading-tight">{user.email}</p>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-400 hidden sm:block" />
            </button>
          }
        >
          <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/dashboard/settings">
              <User className="h-4 w-4" />
              Perfil
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/dashboard/settings">
              <Settings className="h-4 w-4" />
              Configurações
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            destructive
            onClick={() => signOut({ callbackUrl: "/login" })}
          >
            <LogOut className="h-4 w-4" />
            Sair
          </DropdownMenuItem>
        </DropdownMenu>
      </div>
    </header>
  );
}
