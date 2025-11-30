interface CoursePageProps {
  params: Promise<{
    courseSlug: string
  }>
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { courseSlug } = await params
  const courseName = courseSlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <section className="min-h-full py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">{courseName}</h1>
          <p className="text-lg text-gray-600">Course content for {courseName}</p>
        </div>
      </div>
    </section>
  )
}
