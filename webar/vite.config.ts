import { UserConfigExport } from "vite";

import path from "path";
import devcert from "devcert";

export default async (): Promise<UserConfigExport> => {
  const { key, cert } = await devcert.certificateFor("localhost");

  return {
    root: "./",
    base: "./",
    server: {
      host: true,
      open: true,
      https: {
        key,
        cert,
      },
    },
  };
};
