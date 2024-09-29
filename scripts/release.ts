import semver from 'semver'
import { findWorkspacePackages } from '@pnpm/find-workspace-packages'

type releaseType =
  | 'major'
  | 'premajor'
  | 'minor'
  | 'preminor'
  | 'patch'
  | 'prepatch'
  | 'prerelease'

type SemverRow = {
  release: releaseType
  optionsOrLoose?: boolean | string
  identifier?: string
}

const cwd = process.cwd()

const versionType: SemverRow = [
  {
    release: 'major',
  },
  {
    release: 'premajor',
  },
  {
    release: 'minor',
  },
  {
    release: 'preminor',
    optionsOrLoose: 'rc',
    identifier: '1',
  },
  {
    release: 'patch',
    optionsOrLoose: 'rc',
    identifier: '1',
  },
  {
    release: 'prepatch',
    optionsOrLoose: 'rc',
    identifier: '1',
  },
  {
    release: 'prerelease',
    optionsOrLoose: 'rc',
    identifier: '1',
  },
]

async function init() {
  const res = await findWorkspacePackages(cwd)
  const list = res.map(({ dir, manifest: { name, version } }) => {
    return { dir, name, version }
  })

  console.log(list, '--')
}

const version = semver.inc('1.2.3', 'prerelease', 'beta')
console.log(version)
init()
