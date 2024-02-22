"use client";

import { ReactNode, useEffect, useRef } from "react";

export function EventLogic({
  children,
}: {
  children: ReactNode[] | ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    parent.postMessage(
      {
        type: "Event-Components-Body-Height",
        value: ref.current?.scrollHeight,
      },
      "*"
    );
  }, []);

  return (
    <div ref={ref} className="w-full flex flex-col items-center gap-8 py-8">
      {children}
    </div>
  );
}
