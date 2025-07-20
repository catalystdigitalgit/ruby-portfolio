import React from 'react';
import {
  Download,
  Mail,
  Github,
  Linkedin,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Globe,
  ShoppingCart,
  BarChart3,
  Zap,
  Users,
  Palette,
  Code,
  Rocket,
  Menu,
  X,
  User,
  Building,
  MessageSquare,
  Send,
  CheckCircle,
  XCircle,
  Info,
} from 'lucide-react';
import {
  SiReact,
  SiTypescript,
  SiStorybook,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiFigma,
  SiNextdotjs,
  SiBitbucket,
  SiJavascript,
  SiGithub,
} from 'react-icons/si';
import { MdPlayArrow } from 'react-icons/md';

type LucideIconName =
  | 'download'
  | 'mail'
  | 'github'
  | 'linkedin'
  | 'chevron-left'
  | 'chevron-right'
  | 'external-link'
  | 'globe'
  | 'shopping-cart'
  | 'bar-chart'
  | 'zap'
  | 'users'
  | 'palette'
  | 'code'
  | 'rocket'
  | 'menu'
  | 'x'
  | 'user'
  | 'building'
  | 'message-square'
  | 'send'
  | 'check-circle'
  | 'x-circle'
  | 'info';

type ReactIconName =
  | 'react'
  | 'typescript'
  | 'javascript'
  | 'storybook'
  | 'tailwindcss'
  | 'nodejs'
  | 'git'
  | 'figma'
  | 'nextjs'
  | 'bitbucket'
  | 'github-si'
  | 'playwright';

export type IconName = LucideIconName | ReactIconName;

interface IconProps {
  name: IconName;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  color?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 'md',
  className = '',
  color,
}) => {
  const getSizeClass = () => {
    switch (size) {
      case 'xs':
        return 'w-3 h-3';
      case 'sm':
        return 'w-4 h-4';
      case 'md':
        return 'w-5 h-5';
      case 'lg':
        return 'w-6 h-6';
      case 'xl':
        return 'w-8 h-8';
      case '2xl':
        return 'w-10 h-10';
      default:
        return 'w-5 h-5';
    }
  };

  const iconProps = {
    className: `${getSizeClass()} ${className}`,
    ...(color && { style: { color } }),
  };

  const lucideIcons: Record<
    LucideIconName,
    React.ComponentType<React.SVGProps<SVGSVGElement>>
  > = {
    download: Download,
    mail: Mail,
    github: Github,
    linkedin: Linkedin,
    'chevron-left': ChevronLeft,
    'chevron-right': ChevronRight,
    'external-link': ExternalLink,
    globe: Globe,
    'shopping-cart': ShoppingCart,
    'bar-chart': BarChart3,
    zap: Zap,
    users: Users,
    palette: Palette,
    code: Code,
    rocket: Rocket,
    menu: Menu,
    x: X,
    user: User,
    building: Building,
    'message-square': MessageSquare,
    send: Send,
    'check-circle': CheckCircle,
    'x-circle': XCircle,
    info: Info,
  };

  const reactIcons: Record<
    ReactIconName,
    React.ComponentType<React.SVGProps<SVGSVGElement>>
  > = {
    react: SiReact,
    typescript: SiTypescript,
    javascript: SiJavascript,
    storybook: SiStorybook,
    tailwindcss: SiTailwindcss,
    nodejs: SiNodedotjs,
    git: SiGit,
    figma: SiFigma,
    nextjs: SiNextdotjs,
    bitbucket: SiBitbucket,
    'github-si': SiGithub,
    playwright: MdPlayArrow,
  };

  const IconComponent =
    lucideIcons[name as LucideIconName] || reactIcons[name as ReactIconName];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent {...iconProps} />;
};

export default Icon;
