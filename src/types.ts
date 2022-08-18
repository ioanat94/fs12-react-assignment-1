type BlogArticleProps = {
  img: string;
  title: string;
  date: string;
  summary: string;
  link: string;
};

type NavLinkProps = {
  link: string;
  name: string;
};

type SectionTitleProps = {
  title: string;
};

type ServiceCardProps = {
  number: number;
  title: string;
  description: string;
};

type SocialProps = {
  img: string;
  title: string;
};

type StackIconProps = {
  abrv: string;
  title: string;
};

export {
  BlogArticleProps,
  NavLinkProps,
  SectionTitleProps,
  ServiceCardProps,
  SocialProps,
  StackIconProps,
};
