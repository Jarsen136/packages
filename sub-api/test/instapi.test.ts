import { expect, it, describe } from 'vitest'
import Api from '../src/instantapi'
import { Endpoint } from './dummy'

describe('Custom instance of ApiPromise', () => {
  const url = Endpoint.KSM
  it('Should return some data', async () => {
    const api = await new Api(url).getInstance()
    const ss58 = api.consts.system.ss58Prefix.toString()
    expect(ss58).eq('2')
    api.disconnect()
  })
})
