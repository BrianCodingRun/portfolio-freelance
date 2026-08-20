import Link from "next/link";
import React from "react";

type LinkIcon = {
  icon?: React.ReactNode;
  link: string;
  subscriber?: string;
};

export default function LinkIcon({ icon, link, subscriber }: LinkIcon) {
  return (
    <Link href={link} target="_blank" className="flex flex-col items-center">
      {/* ICON */}
      <div
        className="text-primary text-2xl"
        style={{ filter: "drop-shadow(0px 0px 10px rgba(250, 250, 250, 0.3))" }}
      >
        {icon}
      </div>
      <p className="text-sm">{subscriber}</p>
    </Link>
  );
}
