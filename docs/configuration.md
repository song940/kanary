
## Configuration 

配置管理可以根据不同的运行环境改变 Kanary 的默认行为

默认配置：

```js
const root = process.cwd();

export default {
  port: 3000,
  path: {
    root,
    public: path.join(root, 'public'),
    server: path.join(root, 'server'),
    models: path.join(root, 'server/models'),
    plugins: path.join(root, 'server/plugins'),
    services: path.join(root, 'server/services'),
    templates: path.join(root, 'server/templates'),
    controllers: path.join(root, 'server/controllers'),
  },
}
```

### 自定义配置

Kanary 会根据应用运行的环境 (NODE_ENV) 读取不同的配置文件

具体可以参考 [kelp-config](https://github.com/kelpjs/kelp-config) 的实现。