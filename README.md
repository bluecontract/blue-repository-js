# Blue Repository JS

## BlueRepository.blue

`BlueRepository.blue` is the single source of truth. In CI, this repo downloads it from the upstream workflow artifacts (see `.github/workflows/process-blue-artifacts.yml`). For local generation, place `BlueRepository.blue` at the repo root or set `BLUE_REPOSITORY_SOURCE` to a local path.

## Generate & Build Types (no preprocessor)

The Java preprocessor is no longer part of the flow. Artifacts are generated straight from `BlueRepository.blue`.

### Steps

1. Ensure `BlueRepository.blue` is present at repo root (or set `BLUE_REPOSITORY_SOURCE`).
2. Generate sources:

```bash
npm run generate:types
```

3. Build dist and rewrite relative imports for ESM:

```bash
npm run build:types
```

### Notes

- `generate:types` wipes `libs/types/src` and `libs/types/dist` before regenerating.
- `build:types` expects generated sources; run generation first if dist is missing.
