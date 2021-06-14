import Vue from 'vue'

export type State = {
  foo: string;
  bar: {
    baz: number;
    qux: string[];
  };
};

const _state = Vue.observable<State>({
  foo: '',
  bar: {
    baz: 0,
    qux: []
  }
})

export const mutations = {
  updateFoo (foo: State['foo']): void {
    _state.foo = foo
  },
  updateBar (bar: State['bar']): void {
    _state.bar = bar
  }
}

export const state: Readonly<State> = _state
