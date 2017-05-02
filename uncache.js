'use strict';

Object.keys(require.cache).forEach(k => delete require.cache[k]);