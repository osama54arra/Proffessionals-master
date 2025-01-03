import ErrorAlert from "@/components/shared/error-alert";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import { RegisterFormSchema, RegisterFormSchemaType } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";

const MainPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const registerForm = useForm<RegisterFormSchemaType>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      phone: "",
      user_type: "",
      company: false,
    },
  });

  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.state?.from?.pathname;
  const search = location.state?.from?.search;
  const from =
    pathname && !["/unauthorized"].includes(pathname)
      ? `${pathname}${search}`
      : "/";
  const { user, setUser } = useAuth();
  const { error, setError } = useError();
  const isLoading = registerForm.formState.isSubmitting;

  async function onSubmit(values: RegisterFormSchemaType) {
    setError(undefined);
    try {
      const { data: response } = await axios.post(`/register`, values);

      // const { id, username, email, token } = response;

      // const userData: UserT = {
      //   id,
      //   username,
      //   email,
      // };

      // setUser(userData);
      // localStorage.setItem("accessToken", token);
      // localStorage.setItem("isLoggedIn", "true");
      // navigate(from, { replace: true });
    } catch (error: any) {
      if (error.code === "ERR_NETWORK") {
        setError({
          description: "Sorry, server unreachable at the moment.",
        });
      } else {
        registerForm.setValue("password", "");
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
      <Form {...registerForm}>
        <form
          onSubmit={registerForm.handleSubmit(onSubmit)}
          className="flex flex-col text-start gap-3 w-full"
        >
          <FormField
            control={registerForm.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-secondary-foreground">
                  Username
                  <span className="text-primary"> *</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    autoComplete="username"
                    className="hover:bg-secondary"
                  />
                </FormControl>
                <FormMessage className="text-start" />
              </FormItem>
            )}
          />
          <FormField
            control={registerForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-secondary-foreground">
                  Email
                  <span className="text-primary"> *</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    autoComplete="email"
                    className="hover:bg-secondary"
                  />
                </FormControl>
                <FormMessage className="text-start" />
              </FormItem>
            )}
          />
          <FormField
            control={registerForm.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-secondary-foreground">
                  Phone
                  <span className="text-primary"> *</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    autoComplete="phone"
                    className="hover:bg-secondary"
                  />
                </FormControl>
                <FormMessage className="text-start" />
              </FormItem>
            )}
          />
          <FormField
            control={registerForm.control}
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

          {/* user type, worker or homeowner or collaborator */}
          <FormField
            control={registerForm.control}
            name="user_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-secondary-foreground">
                  User Type
                  <span className="text-primary"> *</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    autoComplete="user_type"
                    className="hover:bg-secondary"
                  />
                </FormControl>
                <FormMessage className="text-start" />
              </FormItem>
            )}
          />
          {/* company, boolean checkbox */}
          <FormField
            control={registerForm.control}
            name="company"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {!!error && <ErrorAlert />}
          <Button className="w-full mt-4" type="submit" disabled={isLoading}>
            Register
          </Button>
          <Link to="/login" className="text-blue-500 text-sm">
            Already have an account? Login
          </Link>
        </form>
      </Form>
    </div>
  );
};

export default MainPage;
