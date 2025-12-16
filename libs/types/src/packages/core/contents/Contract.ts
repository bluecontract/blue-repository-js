export const Contract = {
  "name": "Contract",
  "description": "Core type of Blue Language v1.0 (see https://language.blue).\nBase for all contracts (channels, handlers, markers). Contracts live under a\nscope's contracts map (keyed by Text). At runtime, contract processors execute\ndeterministically and only through explicit operations; there are no implicit\nside effects.\n",
  "order": {
    "type": {
      "blueId": "5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1"
    },
    "description": "Deterministic sort key within a scope; missing ≡ 0."
  }
} as const;
