import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

export interface CoursesInfo {
    img: string;
    title: string;
    description: string;
    badges: string[];
}

export function CourseCard({badges, description, img, title}: CoursesInfo) {
    const courseSlug = title.toLowerCase().replace(/\s+/g, '-');
    
    return (
        <Card
            className="w-full bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
            <Link href={`/courses/${courseSlug}`} className="block">
                <CardContent className="p-4">
                <div className='flex gap-3'>
                    <div>
                        <Image
                            className="w-full object-cover rounded-md shadow-md mb-4"
                            alt={`${title} Logo`}
                            src={img}
                            height={100}
                            width={100}
                        />
                    </div>
                    <div>
                        <CardTitle className="text-xl font-bold text-white mb-2">
                            {title}
                        </CardTitle>
                        <CardDescription className="text-sm text-gray-200 mb-4">
                            {description}
                        </CardDescription>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2">
                    {badges.map((badge, index) => (
                        <Badge
                            key={index}
                            className='bg-blue-500 text-white hover:!bg-blue-700 transition-colors'
                        >
                            {badge}
                        </Badge>
                    ))}
                </div>
            </CardContent>
            </Link>
        </Card>
    )
}
