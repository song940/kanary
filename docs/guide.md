# Get Started

Kanary 相比目前社区中其他 Web 框架来说要更简单易用。

为了能更顺畅地进行后面的内容，我们假设你已经安装好了 [Node.js](https://nodejs.org) 并且有一定的编程基础。

[📺 Watch Video Guide on YouTube](https://youtu.be/fuoSU5hJmMM)

首先我们创建一个新的项目，名字就叫做 "kanary-app" 吧

```bash
~$ mkdir kanary-app
~$ cd $_
~$ git init
~$ npm init -y
```

要使用 Kanary 框架，我们首先需要安装它：

```bash
~$ npm i kanary --save
```

根据你的网络连接情况，这可能需要一点时间，不过一般很快就会安装好了。

## 使用

现在我们可以开始写一些代码来让我们的服务运行起来

创建一个文件 index.js 写入下面的代码：

```js
require('kanary/start');
```

然后运行我们的服务器：

```bash
~$ node index.js
```

现在打开浏览器访问 http://localhost:3000 可以看到它已经运行起来了。

虽然它现在看起来有点简陋，但是它确实运行起来了。

## 小结

这篇文章中我们介绍了如何创建一个 Node.js 项目，并安装 Kanary 框架。

与社区中大部分框架不同，Kanary 不需要复杂的设置、也不需要编写很多代码，只需要一行就可以使我们的服务运行。

这种设计思想会在 Kanary 框架中大量体现，后面你会 [了解更多](./README.md) 。