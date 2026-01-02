"use client";
import { CourseCard } from "@/components/Course/CourseCard";
import { courses } from "@/components/Course/CourseCard/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isCreateCourseOpen, setIsCreateCourseOpen] = useState(false);
  return (
    <>
      <section className="min-h-full py-8 px-4 md:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                Cursos Disponíveis
              </h1>
              <p className="text-lg text-gray-600">
                Escolha um curso e comece a aprender hoje mesmo
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {courses.map((item, index) => (
                <CourseCard
                  key={`${item.title}-${index}`}
                  img={item.img}
                  title={item.title}
                  description={item.description}
                  badges={item.badges}
                  courseModules={item.courseModules}
                />
              ))}
            </div>
          </div>

        <Dialog open={isCreateCourseOpen} onOpenChange={setIsCreateCourseOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Criar novo curso</DialogTitle>
              <DialogDescription>
                Preencha as informações do curso. Clique em salvar quando
                terminar
              </DialogDescription>
            </DialogHeader>
            <form action="">
              <div className="grid gap-4 py-4">
                <div className="grid gap-3">
                  <Label htmlFor="name-1">Nome do curso</Label>
                  <Input id="name-1" name="name" placeholder="JavaScript" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="description">Descrição</Label>
                  <Textarea id="description" name="description" placeholder="Entenda sobre o mundo de JavaScript" />
                </div>
              </div>

              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsCreateCourseOpen(false)}>
                  Cancelar
                </Button>
                <Button type="submit">
                  Salvar
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </section>
     <div
        onClick={() => setIsCreateCourseOpen(true)}
        className="rounded-full absolute z-10 right-10 bottom-10 bg-gray-400 p-2 hover:text-white ring-1 hover:ring-2 hover:bg-gray-800 duration-200 cursor-pointer transiton-all hover:scale-125 active:scale-110"
      >
        <Plus className="h-6 w-6 font-bold" />
      </div>
    </>
  );
}
