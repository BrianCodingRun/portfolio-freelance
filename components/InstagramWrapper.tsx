import { Code } from "@/app/_home/components/Code";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";

export default function InstagramWrapper(
  props: React.PropsWithChildren<{ className?: string }>,
) {
  return (
    <Code>
      <Link
        href="https://www.instagram.com/briandevrun/"
        target="_blank"
        rel="noreferrer"
        className={cn("flex items-center gap-2", props.className)}
      >
        <FaInstagram className="text-base" />
        Instagram
      </Link>
    </Code>
  );
}
