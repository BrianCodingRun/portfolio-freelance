import { Code } from "@/app/(website)/_home/components/Code";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export default function GithubWrapper(
  props: React.PropsWithChildren<{ className?: string }>,
) {
  return (
    <Code>
      <Link
        href="https://github.com/BrianCodingRun"
        target="_blank"
        rel="noreferrer"
        className={cn("flex items-center gap-2", props.className)}
      >
        <FaGithub className="text-base" />
        Github
      </Link>
    </Code>
  );
}
