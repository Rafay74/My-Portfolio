import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/grid-pattern";

export default function GridBackground() {
  return (
    <GridPattern
      width={32}
      height={32}
      className={cn(
        "fixed inset-0 z-0 fill-neutral-400/25 stroke-neutral-400/25",
        "[mask-image:radial-gradient(ellipse_at_top,white,transparent_75%)]",
      )}
    />
  );
}
