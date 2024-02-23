"use client";

import { ButtonHTMLAttributes } from "react";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

export function FormSubmitButton(
  props: ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { pending } = useFormStatus();
  return (
    <Button {...props} type="submit" disabled={props.disabled || pending}>
      <span className="flex items-center justify-center gap-2">
        {pending && <Loader2 className="animate-spin" />}
        {props.children}
      </span>
    </Button>
  );
}
