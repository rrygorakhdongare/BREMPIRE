// JSX module support
declare module "*.jsx" {
  import { ComponentType } from "react";
  const component: ComponentType<any>;
  export default component;
}

// Image asset modules
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";
declare module "*.svg";
