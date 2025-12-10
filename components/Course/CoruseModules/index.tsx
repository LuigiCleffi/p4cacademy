import { CoursesInfo } from "../CourseCard";
import { CourseSidebar } from "../CourseSidebar";

export function CourseModules({...props}: CoursesInfo) {

  return (
        <div className="flex">
            <main className="flex-1 p-8">
                <div className="max-w-4xl">
                    {/* Conteúdo dos módulos do curso aqui */}
                    <div className="bg-white border rounded-lg p-8 mb-8 min-h-[300px]">
                        <h2 className="text-2xl font-semibold mb-4">Conceitos básicos</h2>
                        <p className="text-gray-600">Conteúdo do módulo será exibido aqui</p>
                    </div>

                <div className="space-y-4">
                    <div className="h-16 bg-gray-100 rounded"></div>
                    <div className="h-16 bg-gray-100 rounded"></div>
                    <div></div>
                </div>
                </div>
            </main>
            <CourseSidebar {...props} />
        </div>
  )
}
