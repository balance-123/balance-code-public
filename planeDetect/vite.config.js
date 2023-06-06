import path from "path";
import devcert from "devcert";

export default async () => {
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
