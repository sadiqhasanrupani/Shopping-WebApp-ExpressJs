import path from "path";

export const publicPath = path.join(
  path.dirname(require.main?.filename as string),
  "../",
  "../",
  "public"
);

export const dataPath = path.join(
  path.dirname(require.main?.filename as string),
  "../",
  "../",
  "data"
);

export const cartDataPath = path.join(
  path.dirname(require.main?.filename as string),
  "../",
  "../",
  "data",
  "cart.json"
);