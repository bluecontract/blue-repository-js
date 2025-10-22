# Blue Repository JS

## Pull Blue Repository

Copies a Blue repository into `data/blue-repository` for local processing. Accepts absolute or relative paths.

### Defaults

- **source**: `../blue-repository`
- **destination**: `./data/blue-repository`
- **cleaning**: destination is cleaned by default; use `--no-clean` to skip
- **excludes**: skips `.github`, `blue-repository`, `blue-preprocessed`, and dot-directories (e.g., `.git`)

### Usage

- **NPM script** (recommended):

```bash
npm run pull:blue-repository
```

- **With arguments**:

```bash
npm run pull:blue-repository -- [src] [dest] [--no-clean] [--exclude=name1,name2]
```

- **Direct (ts-node)**:

```bash
ts-node -P scripts/tsconfig.scripts.json scripts/pull-blue-repository.ts [src] [dest] [--no-clean] [--exclude=name1,name2]
```

### Examples

- **Default copy (cleans destination):**

```bash
npm run pull:blue-repository
```

- **Custom source and destination:**

```bash
npm run pull:blue-repository -- /abs/path/to/blue-repository ./data/blue-repository
```

- **Skip cleaning destination:**

```bash
npm run pull:blue-repository -- --no-clean
```

- **Add extra excludes:**

```bash
npm run pull:blue-repository -- --exclude=.git,dist,tmp
```

## Run Blue Preprocessor

Runs the Java Blue Preprocessor over the repository and writes preprocessed artifacts to `data/blue-preprocessed`.

### Defaults

- **jar**: `../blue-preprocessor.jar`
- **source**: `./data/blue-repository`
- **output**: `./data/blue-preprocessed`

### Usage

- **NPM script** (recommended):

```bash
npm run run:blue-preprocessor
```

- **With arguments**:

```bash
npm run run:blue-preprocessor -- --jar=../blue-preprocessor.jar --src=./data/blue-repository
```

- **Direct (ts-node)**:

```bash
ts-node -P scripts/tsconfig.scripts.json scripts/run-blue-preprocessor.ts [<path-to-jar>] [path-to-blue-repository]
```

### Examples

- **Use defaults:**

```bash
npm run run:blue-preprocessor
```

- **Custom JAR, default repository path:**

```bash
npm run run:blue-preprocessor -- --jar=../other/blue-preprocessor.jar
```

- **Custom JAR and repository path:**

```bash
npm run run:blue-preprocessor -- --jar=../blue-preprocessor.jar --src=../blue-repository
```
