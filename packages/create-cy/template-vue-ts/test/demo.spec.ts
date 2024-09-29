// @vitest-environment happy-dom
import { mount } from '@vue/test-utils'
import { test, expect, describe } from 'vitest'
import Demo from '../src/components/demo/index.vue'

describe('test demo.vue ', () => {
  test('check prop display', () => {
    const wrapper = mount(Demo, {})

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('hello')
  })
})
