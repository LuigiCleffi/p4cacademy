import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export interface CourseCardProps {
  title: string;
  description: string;
}

export interface CoursesInfo extends CourseCardProps{
  img: string;
  badges: string[];
  courseModules: CourseCardProps[]
}

export function CourseCard({ badges, description, img, title }: CoursesInfo) {
  const courseSlug = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <Card className="w-full bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
      <Link href={`/courses/${courseSlug}?title=${encodeURI(title)}`}>
        <CardContent className="p-4">
          <div className="flex gap-3">
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
                className={cn(
                  "bg-blue-500 text-white hover:bg-blue-700 transition-colors"
                )}
              >
                {badge}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
