"use client";
import { Button } from "@/components/ui/button";
import { PanelLeft, PanelRight } from "lucide-react";
import { useState } from "react";

const courseModuleData = [
  {
    title: "Introduction to Course",
    description: "Learn the basics of the course.",
  },
  {
    title: "Advanced Topics",
    description: "Dive deeper into advanced subjects.",
  },
  {
    title: "Practical Applications",
    description: "Apply what you've learned in real-world scenarios.",
  },
  {
    title: "Final Project",
    description: "Showcase your knowledge with a final project.",
  },
];

export function CourseSidebar() {
  const [activeModule, setActiveModule] = useState<number>(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {isSidebarOpen ? (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="ml-auto"
        >
          <PanelRight className="h-5 w-5" />
        </Button>
      ) : null}

      {!isSidebarOpen ? (
        <aside className="w-64 border-l bg-gray-50">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="ml-auto"
          >
            <PanelLeft className="h-5 w-5" />
          </Button>
          <div className="p-4 space-y-2">
            {courseModuleData?.map((module, index) => (
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
      ) : null}
    </>
  );
}
