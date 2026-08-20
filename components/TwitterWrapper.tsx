import { Code } from "@/app/_home/components/Code";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

export default function TwitterWrapper(
  props: React.PropsWithChildren<{ className?: string }>,
) {
  return (
    <Code>
      <Link
        href="https://x.com/CoupamaBrian"
        target="_blank"
        rel="noreferrer"
        className={cn("flex items-center gap-2", props.className)}
      >
        <FaXTwitter className="text-base" />
        Twitter
      </Link>
    </Code>
  );
}
