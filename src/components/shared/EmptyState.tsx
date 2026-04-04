import { Search } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  message?: string;
}

export default function EmptyState({ 
  title = "Nenhum produto encontrado",
  message = "Tente ajustar seus filtros ou buscar por outro termo."
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
        <Search className="w-7 h-7 text-muted-foreground" />
      </div>
      <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground max-w-sm">{message}</p>
    </div>
  );
}
