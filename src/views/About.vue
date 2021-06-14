<template>
  <div class="about">
    <div>
      foo: <input type="text" :value="foo" @input="updateFoo($event.target.value)" />
    </div>
    <div>
      bar.baz: <input type="number" :value="bar.baz" @input="updateBarBaz($event.target.value)" />
    </div>
    <hr />
    <div>{{ foo }}</div>
    <div>{{ bar }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import { state, mutations } from '@/store'

@Component
export default class About extends Vue {
  get foo (): typeof state.foo {
    return state.foo
  }

  get bar (): typeof state.bar {
    return state.bar
  }

  updateFoo (foo: string): void {
    mutations.updateFoo(foo)
  }

  updateBarBaz (barbaz: number): void {
    mutations.updateBar({
      baz: barbaz,
      qux: String(barbaz).split('')
    })
  }
}
</script>
