// components/TechIcon.tsx

import CloudinaryIcon from "@/assets/icons/cloudinary.svg";
import DockerIcon from "@/assets/icons/docker.svg";
import FlutterIcon from "@/assets/icons/flutter.svg";
import GitIcon from "@/assets/icons/git.svg";
import GsapIcon from "@/assets/icons/gsap.svg";
import HostingerIcon from "@/assets/icons/hostinger.svg";
import LinuxIcon from "@/assets/icons/linux.svg";
import MongoDbIcon from "@/assets/icons/mongodb.svg";
import MysqlIcon from "@/assets/icons/mysql.svg";
import NextjsIcon from "@/assets/icons/nextdotjs.svg";
import NginxIcon from "@/assets/icons/nginx.svg";
import NodejsIcon from "@/assets/icons/nodedotjs.svg";
import PaypalIcon from "@/assets/icons/paypal.svg";
import PostgreSqlIcon from "@/assets/icons/postgresql.svg";
import PrestashopIcon from "@/assets/icons/prestashop.svg";
import ReactIcon from "@/assets/icons/react.svg";
import SassIcon from "@/assets/icons/sass.svg";
import ShadcnIcon from "@/assets/icons/shadcnui.svg";
import SpotifyIcon from "@/assets/icons/spotify.svg";
import StripeIcon from "@/assets/icons/stripe.svg";
import SymfonyIcon from "@/assets/icons/symfony.svg";
import TailwindCssIcon from "@/assets/icons/tailwindcss.svg";
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import WordpressIcon from "@/assets/icons/wordpress.svg";

const icons = {
  cloudinary: CloudinaryIcon,
  docker: DockerIcon,
  flutter: FlutterIcon,
  git: GitIcon,
  gsap: GsapIcon,
  hostinger: HostingerIcon,
  linux: LinuxIcon,
  mongodb: MongoDbIcon,
  mysql: MysqlIcon,
  nextjs: NextjsIcon,
  nginx: NginxIcon,
  nodejs: NodejsIcon,
  paypal: PaypalIcon,
  postgresql: PostgreSqlIcon,
  prestashop: PrestashopIcon,
  react: ReactIcon,
  sass: SassIcon,
  shadcn: ShadcnIcon,
  spotify: SpotifyIcon,
  stripe: StripeIcon,
  symfony: SymfonyIcon,
  tailwindcss: TailwindCssIcon,
  typescript: TypeScriptIcon,
  wordpress: WordpressIcon,
};

type IconName = keyof typeof icons;

type Props = {
  name: string;
  size?: number;
  className?: string;
};

export default function TechIcon({ name, size = 24, className }: Props) {
  const Icon = icons[name as IconName];

  if (!Icon) {
    return null;
  }

  return (
    <Icon width={size} height={size} className={className} aria-hidden="true" />
  );
}
