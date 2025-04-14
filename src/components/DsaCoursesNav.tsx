
import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { 
  GitBranch, 
  ListTree, 
  Network, 
  Hash, 
  MinusSquare, 
  SortAsc, 
  Sigma,
  BarChart3
} from 'lucide-react';
import { cn } from "@/lib/utils";
import { topics } from '@/data/sampleData';

const DsaCoursesNav: React.FC = () => {
  // Icon map to match icons with topic icons
  const iconMap: Record<string, React.ReactNode> = {
    'brackets-square': <MinusSquare className="h-4 w-4 mr-2" />,
    'link': <ListTree className="h-4 w-4 mr-2" />,
    'git-branch': <GitBranch className="h-4 w-4 mr-2" />,
    'network': <Network className="h-4 w-4 mr-2" />,
    'hash': <Hash className="h-4 w-4 mr-2" />,
    'sort-asc': <SortAsc className="h-4 w-4 mr-2" />,
    'sigma': <Sigma className="h-4 w-4 mr-2" />,
    'stacked-bar-chart': <BarChart3 className="h-4 w-4 mr-2" />
  };

  return (
    <NavigationMenu className="max-w-full w-full justify-start">
      <NavigationMenuList className="flex flex-wrap">
        {topics.map((topic) => (
          <NavigationMenuItem key={topic.id}>
            <NavigationMenuTrigger className="flex items-center">
              {iconMap[topic.icon]}
              {topic.title}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {topic.lessons.slice(0, 8).map((lesson) => (
                  <li key={lesson.id}>
                    <NavigationMenuLink asChild>
                      <Link
                        to={`/lesson/${lesson.id}`}
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">{lesson.title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {lesson.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
                {topic.lessons.length > 8 && (
                  <li className="col-span-2">
                    <Link
                      to={`/courses?topic=${topic.id}`}
                      className="text-sm text-primary hover:underline"
                    >
                      View all {topic.lessons.length} lessons
                    </Link>
                  </li>
                )}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DsaCoursesNav;
