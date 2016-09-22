var Vue = require('vue');
var todo = require('../src/components/todo.vue');

describe('todo.vue', function() {
  const getComponent = (todoText) => {
    return new Vue({
      data: { todoText },
      template: '<div><todo :todo="todoText"></todo></div>',
      components: {
        todo
      }
    })
  };

  it('should be javascript', function () {
    console.log(JSON.stringify(todo));
    expect(typeof todo.data).toEqual('function');
  });

  it('should receive props', function(done) {
    const vm = getComponent('Vue Test').$mount();

    Vue.nextTick((done) => {
      console.log(vm.$el);
      expect(vm.$el.textContent).toEqual('Vue Test');
      done();
    });
  });
});