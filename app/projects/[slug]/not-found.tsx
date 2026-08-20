"use client";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <div className="flex items-center justify-center bg-background text-green-400 pt-6 pb-16 px-4">
      <Card className="max-w-2xl w-full shadow-2xl border border-primary bg-background">
        <CardContent className="p-6 space-y-6">
          {/* Fake terminal header */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full" />
            <span className="w-3 h-3 bg-yellow-500 rounded-full" />
            <span className="w-3 h-3 bg-green-500 rounded-full" />
            <span className="ml-4 text-xs text-primary">/projects/[slug]</span>
          </div>

          {/* Terminal content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-sm leading-relaxed space-y-2"
          >
            <p>$ fetch /api/projects/[slug]</p>
            <p className="text-red-400">Error 404: PROJECT_NOT_FOUND</p>
            <p>$ reason:</p>
            <ul className="list-disc ml-6 text-primary">
              <li>{"Le projet n'existe pas"}</li>
              <li>Le slug est incorrect</li>
              <li>Le projet a été supprimé</li>
            </ul>

            <p className="mt-4">$ suggestion:</p>
            <p className="text-primary">
              {"Vérifie l'URL ou retourne à la liste des projets."}
            </p>

            {/* blinking cursor */}
            <div className="flex items-center">
              <span>$</span>
              <motion.span
                className="ml-1 inline-block w-2 h-4 bg-primary"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              />
            </div>
          </motion.div>

          {/* Actions */}
          <motion.div
            className="flex gap-4 pt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              href="/"
              className={cn(buttonVariants({ variant: "secondary" }))}
            >
              <Home className="mr-1 h-4 w-4" />
              Accueil
            </Link>

            <Link
              href="/projects"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Projets
            </Link>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
}
