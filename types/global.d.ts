/* eslint-disable no-var */
declare global {
  var prometheusRegistry: Registry | undefined;
  var httpRequestTimer: Histogram<string> | undefined;
}

export {};
