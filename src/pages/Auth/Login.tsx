import ErrorAlert from "@/components/shared/error-alert";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { axios } from "@/hooks/use-axios";
import { UserT } from "@/lib/types";
import { useAuth } from "@/providers/auth-provider";
import { useError } from "@/providers/error-provider";
import { LoginFormSchema, LoginFormSchemaType } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";

const MainPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const loginForm = useForm<LoginFormSchemaType>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.state?.from?.pathname;
  const search = location.state?.from?.search;
  const from =
    pathname && !["/unauthorized"].includes(pathname)
      ? `${pathname}${search}`
      : "/menu";
  const { user, setUser } = useAuth();
  const { setError } = useError();
  const isLoading = loginForm.formState.isSubmitting;

  async function onSubmit(values: LoginFormSchemaType) {
    setError(undefined);
    try {
      const { data: response } = await axios.post(`/Auth/Login`, values);

      const { id, username, email, token } = response;

      const userData: UserT = {
        id,
        username,
        email,
      };

      setUser(userData);
      localStorage.setItem("accessToken", token);
      localStorage.setItem("isLoggedIn", "true");
      navigate(from, { replace: true });
    } catch (error: any) {
      if (error.code === "ERR_NETWORK") {
        setError({
          description: "Sorry, server unreachable at the moment.",
        });
      } else {
        loginForm.setValue("password", "");
        setError({
          description: error.response.data[0],
        });
      }
    }
  }
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, []);
  return (
    <div className="flex flex-col justify-center items-center gap-10 z-50 text-center md:scale-100 scale-75 w-96 border p-5 border-border rounded-md">
      <Form {...loginForm}>
        <form
          onSubmit={loginForm.handleSubmit(onSubmit)}
          className="flex flex-col text-start gap-3 w-full"
        >
          <FormField
            control={loginForm.control}
            name="identifier"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-secondary-foreground">
                  Username Or Email
                  <span className="text-primary"> *</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    autoComplete="identifier"
                    className="hover:bg-secondary"
                  />
                </FormControl>
                <FormMessage className="text-start" />
              </FormItem>
            )}
          />
          <FormField
            control={loginForm.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-secondary-foreground">
                  Password
                  <span className="text-primary"> *</span>
                </FormLabel>
                <FormControl>
                  <Input
                    className="hover:bg-secondary"
                    type={showPassword ? "text" : "password"}
                    {...field}
                    autoComplete="password"
                    icon={
                      showPassword ? (
                        <Eye
                          onClick={() => setShowPassword(false)}
                          size={20}
                          className="cursor-pointer"
                        />
                      ) : (
                        <EyeOff
                          onClick={() => setShowPassword(true)}
                          size={20}
                          className="cursor-pointer"
                        />
                      )
                    }
                    iconPosition={"right"}
                  />
                </FormControl>
                <FormMessage className="text-start" />
              </FormItem>
            )}
          />
          <ErrorAlert />
          <Button className="w-full mt-4" type="submit" disabled={isLoading}>
            Login
          </Button>
          <Link to="/register" className="text-blue-500 text-sm">
            Don&apos; have an account? Register
          </Link>
        </form>
      </Form>
    </div>
  );
};

export default MainPage;
