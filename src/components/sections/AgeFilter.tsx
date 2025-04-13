"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AgeRange {
  id: string;
  label: string;
}

interface AgeFilterProps {
  ageRanges: AgeRange[];
  selectedAgeRange: string;
  onSelectAgeRange: (ageRange: string) => void;
}

export default function AgeFilter({
  ageRanges,
  selectedAgeRange,
  onSelectAgeRange,
}: AgeFilterProps) {
  return (
    <div className="flex space-x-2 overflow-x-auto pb-2 md:pb-0 md:flex-wrap md:gap-2">
      {ageRanges.map((age) => (
        <Button
          key={age.id}
          variant="outline"
          className={cn(
            "rounded-full whitespace-nowrap",
            selectedAgeRange === age.id &&
              "bg-purple-600 text-white hover:bg-purple-700 border-purple-600"
          )}
          onClick={() => onSelectAgeRange(age.id)}
        >
          {age.label}
        </Button>
      ))}
    </div>
  );
}
