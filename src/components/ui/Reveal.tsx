"use client";

import type { ReactNode } from "react";
import * as m from "motion/react-m";
import { fadeUp, stagger } from "@/lib/motion";

type RevealTag = "div" | "ul" | "li" | "article";

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: RevealTag;
  delay?: number;
}

const viewport = { once: true, amount: 0.2 } as const;

/** Aparece con fade + slide-up suave al entrar en pantalla. */
export function Reveal({ children, className, as = "div", delay = 0 }: RevealProps) {
  const Component = m[as];
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </Component>
  );
}

interface RevealGroupProps extends RevealProps {
  staggerChildren?: number;
}

/** Contenedor que escalona la aparición de sus `RevealItem`. */
export function RevealGroup({ children, className, as = "div", staggerChildren = 0.08, delay = 0 }: RevealGroupProps) {
  const Component = m[as];
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={stagger(staggerChildren, delay)}
    >
      {children}
    </Component>
  );
}

export function RevealItem({ children, className, as = "div" }: Omit<RevealProps, "delay">) {
  const Component = m[as];
  return (
    <Component className={className} variants={fadeUp}>
      {children}
    </Component>
  );
}
