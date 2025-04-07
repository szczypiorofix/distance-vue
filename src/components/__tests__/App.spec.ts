import { describe, it, expect } from 'vitest'
import App from '../../App.vue'
import { mount } from '@vue/test-utils'

describe('App', () => {
  it('renders application properly', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('Oblicz odległość między punktami')
  });
});
