import type { ReactNode } from "react";

export interface StepsProps {
  img1?: string;
  img2?: string;
  img3?: string;
  isGamer?: boolean;
}

export interface StepGamer {
  image: string;
  title: string;
  description: string | ReactNode;
}