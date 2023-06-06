import { UserConfigExport } from "vite";

export default async (): Promise<UserConfigExport> => {
  return {
    root: "./",
    base: "./",
  };
};
