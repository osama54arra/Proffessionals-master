import { axios } from "@/hooks/use-axios";
import { UserT } from "@/lib/types";
import { getAccessTokenFromLS } from "@/lib/utils";
import { createContext, useContext, useState } from "react";

type AuthProviderState = {
  user: UserT | undefined;
  setUser: (user: UserT | null) => void;
};

const initialState: AuthProviderState = {
  user: undefined,
  setUser: () => null,
};

const AuthProviderContext = createContext<AuthProviderState>(initialState);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserT | undefined>(() => {
    return undefined;
  });

  const value = {
    user,
    setUser: (user: UserT | null) => {
      if (!user) {
        setUser(undefined);
        return;
      }
      setUser(user);
    },
  };

  return (
    <AuthProviderContext.Provider value={value}>
      {children}
    </AuthProviderContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthProviderContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
export const getCurrentUser = async () => {
  const accessToken = getAccessTokenFromLS();
  const response = await axios.get("/Auth/GetCurrentUser", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data as UserT;
};

export default AuthProviderContext;
