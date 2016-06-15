# grunt示例

为了方便grunt初学者能够快速了解grunt的工作形式，本Repo为大家展现一个简单而有趣的示例，在本示例中，为大家展现『如何实现js文件自动化压缩』

## 说明

<pre>
├── Gruntfile.js - grunt配置文件
├── README.md - 项目说明
├── build - 编译目标路径
├── package.json - 工程配置文件，包括依赖包、工程配置项
├── src - 源码目录
│   └── hello.js
└── test - 测试目录
</pre>

grunt含有很多插件，其中grunt-contrib-是grunt官网出来的，可以到![grunt网站](http://www.gruntjs.net/plugins)搜索插件，这里对本例用到的几个插件进行说明：

* grunt-contrib-uglify  js压缩工具
* grunt-contrib-watch  监视文件是否发生修改

本例的思路：通过watch插件监视js是否发生变化，当发生变化，则自动调用uglify进行js压缩，并输出到build目录

## 使用
<pre>
git clone https://github.com/smallmuou/hello-grunt
cd hello-grunt
npm install
grunt
</pre>
执行上述前，请按照nodejs、npm和grunt-cli，详见![grunt快速入门](http://www.gruntjs.net/getting-started)

## 许可

本示例遵循MIT许可，大家可以自由使用.
