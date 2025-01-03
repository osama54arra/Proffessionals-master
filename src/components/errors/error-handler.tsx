import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";
interface IProps {
  status?: number;
  title?: string;
  children?: ReactNode;
}
const ErrorHandler = ({
  status = 500,
  title = "❌ Server Error",
  children,
}: IProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="fixed inset-0 bg-background flex flex-col items-center gap-4 justify-center z-50">
      <h1 className="font-extrabold text-[150px] text-secondary-foreground">
        {status}
      </h1>
      <h2 className="font-bold text-secondary-foreground">{t(title)}</h2>
      {children ?? (
        <Button onClick={() => navigate("/menu")}>{t("Back To Home")}</Button>
      )}
    </div>
  );
};

export default ErrorHandler;
