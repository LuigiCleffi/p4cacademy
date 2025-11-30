import { CourseCard } from '@/components/CourseCard'
import { courses } from '@/components/CourseCard/utils'

export default function Home() {
    return (
        <section className="min-h-full py-8 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Cursos Disponíveis</h1>
                    <p className="text-lg text-gray-600">Escolha um curso e comece a aprender hoje mesmo</p>
                </div>
                
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {
                    courses.map((item, index) => (
                        <CourseCard 
                        key={`${item.title}-${index}`}
                        img={item.img}
                        title={item.title}
                        description={item.description}
                        badges={item.badges}
                        />
                    ))
                }
                </div>
            </div>
        </section>
    )
}
