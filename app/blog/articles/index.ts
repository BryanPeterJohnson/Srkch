import React from "react";
import CaregiverBurnoutContent, { meta as burnoutMeta } from "./preventing-caregiver-burnout";
import GeriatricFallPreventionContent, { meta as fallMeta } from "./geriatric-fall-prevention";
import PostStrokeNutritionContent, { meta as strokeMeta } from "./post-stroke-nutrition";
import AlzheimersSundowningContent, { meta as sundownMeta } from "./managing-alzheimers-sundowning";
import PreventingMedicalBedsoresContent, { meta as bedsoresMeta } from "./preventing-medical-bedsores";
import PalliativeCareMisconceptionsContent, { meta as palliativeMeta } from "./palliative-care-misconceptions";

export interface ArticleConfig {
  meta: {
    title: string;
    description: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    author: {
      name: string;
      role: string;
      avatar: string;
    };
  };
  component: React.ComponentType;
}

export const ARTICLES_MAP: Record<string, ArticleConfig> = {
  "preventing-family-caregiver-burnout": {
    meta: burnoutMeta,
    component: CaregiverBurnoutContent,
  },
  "geriatric-fall-prevention-checklist": {
    meta: fallMeta,
    component: GeriatricFallPreventionContent,
  },
  "post-stroke-nutritional-recovery": {
    meta: strokeMeta,
    component: PostStrokeNutritionContent,
  },
  "managing-alzheimers-sundowning-behaviors": {
    meta: sundownMeta,
    component: AlzheimersSundowningContent,
  },
  "preventing-medical-bedsores-protocol": {
    meta: bedsoresMeta,
    component: PreventingMedicalBedsoresContent,
  },
  "palliative-care-vs-hospice-misconceptions": {
    meta: palliativeMeta,
    component: PalliativeCareMisconceptionsContent,
  },
};