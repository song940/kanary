## Router

在 Kanary 中，所有路由都定义在 *app.routes* 数组中，当服务器收到请求时，**路由模块** 会查询请求匹配的路由规则并根据路由的描述调度 **控制器** 。

在 Kanary 中定义路由有几种方法：

1. 使用配置文件定义
2. 使用路由修饰器定义
3. 使用 [Kanary API](./API.md)  定义

下面我们依次介绍：

### 使用配置文件定义路由规则

```js
exports.routes = [
  'get / => home#index'
];
```

### 使用修饰器定义路由

```js
import { get } from 'kanary/router';

class Home {
  @get('/hi')
  async index(){
    return 'hello world';
  }
}

export default Home;
```
### 使用 Kanary API 定义路由

```js
module.exports = app => {
  app.router.get('/').to('home', 'index');
}
```