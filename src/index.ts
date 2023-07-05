import { defineConfigSchema, getAsyncLifecycle } from "@openmrs/esm-framework";
import { configSchema } from "./config-schema";

const moduleName = "@openmrs/esm-draw-app";

const options = {
  featureName: "draw",
  moduleName: "@openmrs/esm-draw-app",
};

export const importTranslation = require.context(
  "../translations",
  false,
  /.json$/,
  "lazy"
);

export const drawPage = getAsyncLifecycle(
  () => import("./draw-page.component"),
  options
);

export function startupApp() {
  defineConfigSchema(moduleName, configSchema);
}
