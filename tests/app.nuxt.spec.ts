import { useAppConfig } from 'nuxt/app'
import { describe, expect, it } from 'vitest'

describe('my test', () => {
    // ... test with Nuxt environment!
    it('works', () => {
        expect(useAppConfig()).toMatchInlineSnapshot(`
        `)
    })
})