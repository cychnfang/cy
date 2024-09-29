import { findWorkspacePackages } from '@pnpm/find-workspace-packages'

const cwd = process.cwd()

async function init() {
  const res = await findWorkspacePackages(cwd)
  const list = res.map(({ dir, manifest: { name, version } }) => {
    return { dir, name, version }
  })

  console.log(list, '--')
}

init()
