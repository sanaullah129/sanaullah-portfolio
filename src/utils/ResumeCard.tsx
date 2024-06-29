import { useState } from "react";
import { Link } from "react-router-dom";
import { CardContent, CardHeader } from "./Card";
import { MdOutlineChevronRight, MdOutlineExpandMore } from "react-icons/md";
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
  isExperience: boolean;
  location: string
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
  isExperience,
  location
}: ResumeCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <div className="flex-none">
        <Link to={href || "#"} className="block cursor-pointer" target="_blank">
          <div className="size-12 m-auto bg-muted-background">
            <img src={logoUrl} alt={altText} className="object-contain" />
          </div>
        </Link>
      </div>
      <div className="flex-grow ml-4 items-center flex-col group">
        <CardHeader>
          <div className="flex items-center justify-between gap-x-2 text-base">
            <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
              <Link
                to={href || "#"}
                className="block cursor-pointer"
                target="_blank"
              >
                {title}, {location}
              </Link>
              {badges && (
                <span className="inline-flex gap-x-1">
                  {badges.map((badge, index) => (
                    <Badge className="align-middle text-xs" key={index}>
                      {badge}
                    </Badge>
                  ))}
                </span>
              )}
              {isExperience && (
                <button onClick={toggleAccordion} className="ml-2">
                  {isOpen ? (
                    <MdOutlineExpandMore className="size-4 transition-transform duration-300 ease-out" />
                  ) : (
                    <MdOutlineChevronRight className="size-4 transition-transform duration-300 ease-out" />
                  )}
                </button>
              )}
            </h3>
            <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
              {period}
            </div>
          </div>
          {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
        </CardHeader>
        {isExperience && isOpen && (
          <CardContent
            className={`mt-2 text-xs sm:text-sm transition-all duration-300 ease-out ${
              isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {description}
          </CardContent>
        )}
        {!isExperience && (
          <CardContent className="mt-2 text-xs sm:text-sm">
            {description}
          </CardContent>
        )}
      </div>
    </div>
  );
};
