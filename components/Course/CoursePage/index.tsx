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
import { courses } from "@/components/Course/CourseCard/utils";

export default function CoursePage() {
  const searchParams = useSearchParams();
  const courseTitle = searchParams.get("title");

  if (!courseTitle) {
    return <div>Curso não encontrado</div>;
  }
  
  const course = courses?.find((c) => c.title === courseTitle);

  if (!course) {
    return <div>Curso não encontrado</div>;
  }

  return (
    <div className="min-h-screen">
      <div className="bg-white border-b px-6 py-4">
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
      <CourseModules {...course} />
    </div>
  );
}
