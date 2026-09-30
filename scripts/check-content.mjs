// FR/EN parity check, runnable in CI without a browser: `npm run check:content`.
// The same walk runs in the dev server console; this makes it fail a build.
import { en } from '../src/content/en.js'
import { fr } from '../src/content/fr.js'
import { diffShape } from '../src/content/index.js'

const problems = diffShape(fr, en)
if (problems.length) {
  console.error('FR/EN content shape mismatch:\n' + problems.join('\n'))
  process.exit(1)
}
console.log('FR/EN content parity: ok')
