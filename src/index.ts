import { getAsyncLifecycle } from "@openmrs/esm-framework";

const options = {
  featureName: "draw",
  moduleName: "@openmrs/esm-draw",
};

export const drawPage = {
  load: getAsyncLifecycle(() => import("./draw-page"), options),
  route: "draw",
  order: 2,
};

export const drawExtension = {
  name: "draw-extension",
  load: getAsyncLifecycle(() => import("./"), options),
  slot: "draw-slot",
};

export default {
  pages: [drawPage],
  extensions: [drawExtension],
};
