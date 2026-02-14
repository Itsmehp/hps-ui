import fs from "fs"
import path from "path"

export function addComponent(name: string) {
  if (!name) {
    console.log("Please specify a component name.")
    process.exit(1)
  }

  // Resolve the CLI root to locate the registry.
  const cliRoot = path.resolve(__dirname, "../../")

  const registryPath = path.join(
    cliRoot,
    "registry",
    "ui",
    name.split("-")[0],
    `${name}.tsx`
  )

  if (!fs.existsSync(registryPath)) {
    console.log("Component not found in registry.")
    process.exit(1)
  }

  // User project root (where command is executed)
  const targetDir = path.join(process.cwd(), "components/ui")

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true })
  }

  const targetPath = path.join(targetDir, `${name}.tsx`)

  fs.copyFileSync(registryPath, targetPath)

  console.log(`Added ${name} to components/ui`)
}
