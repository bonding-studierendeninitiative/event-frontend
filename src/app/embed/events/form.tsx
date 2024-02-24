"use client";

import { FormHTMLAttributes, ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

export function ClientForm({
  children,
  className,
  action,
}: { children: ReactNode } & FormHTMLAttributes<HTMLFormElement>) {
  const [touched, setTouched] = useState(false);

  return (
    <form
      action={action}
      onChange={(_) => {
        setTouched(true);
      }}
      data-touched={touched}
      className={cn(
        "group/form flex flex-col sm:flex-row gap-8 items-center ",
        className
      )}
    >
      {children}
    </form>
  );
}
