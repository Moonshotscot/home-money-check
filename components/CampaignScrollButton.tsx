"use client";

import type { ReactNode } from "react";

type CampaignScrollButtonProps = {
  children: ReactNode;
  className: string;
  targetId: string;
};

export function CampaignScrollButton({
  children,
  className,
  targetId,
}: CampaignScrollButtonProps) {
  function scrollToTarget() {
    document.getElementById(targetId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <button className={className} onClick={scrollToTarget} type="button">
      {children}
    </button>
  );
}
