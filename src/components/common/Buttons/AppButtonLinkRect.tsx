import { ReactNode } from "react";
import { AppInternalLink } from "../InternalLink/AppInternalLink";
import { AppButtonActionRect } from "./AppButtonActionRect";

interface IAppButtonLinkRect {
  id?: string;
  href: string;
  children: ReactNode;
  icon?: ReactNode;
}

export function AppButtonLinkRect(props: IAppButtonLinkRect) {
  return (
    <AppInternalLink id={props.id ?? ""} href={props.href} style={{width: "75vw", maxWidth: "7.44rem"}}>
      <AppButtonActionRect icon={props.icon} fullWidth>
        {props.children} 
      </AppButtonActionRect>
    </AppInternalLink>
  )
}