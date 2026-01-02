"use client";
import { useSearchParams } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { CourseModules } from "../CoruseModules";

export default function CoursePage() {
  const searchParams = useSearchParams();
  const courseTitle = searchParams.get("title");

  if (!courseTitle) {
    return <div>Curso não encontrado</div>;
  }

  return (
    <div>
      <div className="bg-white border-b px-6 py-2 flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
       <CourseModules />
    </div>
  );
}
