import { createContext, useContext, type ReactNode } from "react";
import { useSiteSettings as useSiteSettingsFetch, type SiteSettings } from "./useSiteSettings";

const SiteSettingsContext = createContext<SiteSettings | null>(null);

export function SiteSettingsProvider({ children }: { children: ReactNode }) {
  const settings = useSiteSettingsFetch();
  return (
    <SiteSettingsContext.Provider value={settings}>
      {children}
    </SiteSettingsContext.Provider>
  );
}

export function useSiteSettingsContext() {
  return useContext(SiteSettingsContext);
}
