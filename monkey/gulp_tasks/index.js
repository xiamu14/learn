/**
 * import object that include all of gulp task function
 */

import { css } from './css.js'
import { js } from './js.js'
import { init } from './init.js'
import { rev } from './rev.js'
import { clean } from './clean.js'
export const tasks = {
    css,
    js,
    init,
    rev,
    clean
}