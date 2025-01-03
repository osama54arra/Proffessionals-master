import { useError } from "@/providers/error-provider";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CircleX } from "lucide-react";

const ErrorAlert = () => {
  const { error } = useError();
  return (
    <>
      {error && (
        <div className="w-full">
          <Alert variant="destructive" className="bg-red-200 border-none p-2">
            {error?.description && (
              <AlertDescription className="dark:text-secondary text-secondary-foreground flex items-center gap-2">
                <CircleX size={16} className="text-red-500" />
                {error.description}
              </AlertDescription>
            )}
          </Alert>
        </div>
      )}
    </>
  );
};

export default ErrorAlert;
