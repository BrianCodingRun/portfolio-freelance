import { Code } from "@/app/(website)/_home/components/Code";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { MdEmail } from "react-icons/md";

export default function EmailWrapper(
  props: React.PropsWithChildren<{ className?: string }>,
) {
  return (
    <Code>
      <Link
        href="mailto:dev.contact@briancoupama.re"
        target="_blank"
        rel="noreferrer"
        className={cn("flex items-center gap-2", props.className)}
        style={{ fontFamily: "var(--font-geist-mono)" }}
      >
        <MdEmail className="text-primary text-[1rem]" />
        Me contacter
      </Link>
    </Code>
  );
}
