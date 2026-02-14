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

## Contributing

```bash
npm install
npm run build
```

## License

MIT. See LICENSE.
