import Vue from 'vue'

export type State = {
  foo: string;
  bar: {
    baz: number;
    qux: string[];
  };
};

export const state = Vue.observable<State>({
  foo: '',
  bar: {
    baz: 0,
    qux: []
  }
})

export const mutations = {
  updateFoo (foo: State['foo']): void {
    state.foo = foo
  },
  updateBar (bar: State['bar']): void {
    state.bar = bar
  }
}
