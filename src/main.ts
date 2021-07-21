import * as Comlink from 'comlink'

import transpileWorker from './worker?worker'

const tWorker = new transpileWorker()
const worker = Comlink.wrap<any>(tWorker)

worker.transpileSingleFile('/src/index.tsx', 'console.log("Hello world")').then((res:any)=>console.log('transpiled', res))
