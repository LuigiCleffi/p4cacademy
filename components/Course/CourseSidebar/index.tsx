"use client";
import { Button } from "@/components/ui/button";
import { CoursesInfo } from "../CourseCard";
import { useState } from "react";

export function CourseSidebar({ courseModules }: CoursesInfo) {
    const [activeModule, setActiveModule] = useState<number>(1);
  return (
    <aside className="w-64 border bg-white h-full sticky top-0 flex flex-col">
      <aside className="w-64 border-l bg-white h-screen sticky top-0 flex flex-col">
        <div className="p-4 space-y-2">
          {courseModules?.map((module, index) => (
            <Button
              key={module.title}
              variant={activeModule === index ? "default" : "outline"}
              className="w-full justify-start text-left"
              onClick={() => setActiveModule(index)}
            >
              {module.title}
            </Button>
          ))}
        </div>
      </aside>
    </aside>
  );
}
