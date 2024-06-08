import * as React from "react";

import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    return (
      <Input
        type={showPassword ? "text" : "password"}
        suffix={
          showPassword ? (
            <EyeIcon
              className="select-none"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <EyeOffIcon
              className="h-4 w-4 select-none"
              onClick={() => setShowPassword(true)}
            />
          )
        }
        className={className}
        {...props}
        ref={ref}
      />
    );
  }
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
