# hps-ui

Reusable UI components with a simple CLI.

## Overview

hps-ui lets you pull ready-made UI pieces into your project using a single command.

## Install

Global install:

```bash
npm install -g hps-ui
```

Local development (from this repo):

```bash
npm link
```

## Usage (CLI add)

```bash
hps-ui add navbar-01
```

## Available components

- navbar-01

## Configuration / output paths

- Components are written to `components/ui/<name>.tsx` in your current working directory.
- The registry lookup uses the name prefix as the group (example: `navbar-01` is found under `registry/ui/navbar/`).

## Updating a component in the registry

When you update a component (for example, `navbar-01`), keep the registry in sync:

1. Edit the component source at `registry/ui/<group>/<name>.tsx`.
2. Verify the component still renders and builds as expected.
3. If this is a new component, add it to `registry/index.json`.
4. Commit and push the changes.

## Contributing

```bash
npm install
npm run build
```

## License

MIT. See LICENSE.
