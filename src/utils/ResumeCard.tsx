import { Link } from "react-router-dom";
import { CardContent, CardHeader } from "./Card";
import { MdOutlineChevronRight } from "react-icons/md";
import { Badge } from "./Badge";


interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  return (
    <Link to={href || "#"} className="block cursor-pointer">
      <div className="flex">
        <div className="flex-none">
          <div className="border size-12 m-auto bg-muted-background dark:bg-foreground">
            <img
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            {/* <AvatarFallback>{altText[0]}</AvatarFallback> */}
          </div>
        </div>
        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                {title}
                {badges && (
                  <span className="inline-flex gap-x-1">
                    {badges.map((badge, index) => (
                      <Badge
                        className="align-middle text-xs"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                <MdOutlineChevronRight className="size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                {period}
              </div>
            </div>
            {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
          </CardHeader>
          <CardContent className="mt-2 text-xs sm:text-sm">
            {description}
          </CardContent>
        </div>
      </div>
    </Link>
  );
};
