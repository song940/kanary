## Controller

Kanary 中的 控制器 对于服务器来说非常重要，它是我们处理请求的关键。

目前支持以下类型：

#### Function 函数

```js
export default () => {
  return 'hello world';
};
```

#### Object 对象

```js
export default {
  method: 'get',
  url: '/:name?',
  controller(params) {
    const { name } = params;
    return `hello ${name}`;
  }
};

```

#### Array 数组

数组中可以包含上面两种类型 (Function and/or Object)

```js
export default [
  () => 'hello world 1',
  () => 'hello world 2',
];
```

#### Class 类

```js
import Controller from 'kanary/controller';

class Home extends Controller {
  async index(){
    return 'hello world'; // 响应
  }
}

export default Home;
```