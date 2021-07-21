import * as Comlink from 'comlink'
 
//@ts-ignore
import * as babel from "https://cdn.skypack.dev/@babel/standalone"

const transpileBabelStandalone = (code: string, filename: string) =>
  babel.transform(code, { filename })

export const transpileSingleFile = (path: string, data: string) => {
  try {
    const transpiled = transpileBabelStandalone(data, path)

    return transpiled
  } catch (err) {
    return { error: err }
  }
}

Comlink.expose({transpileSingleFile})