# react study
##前后端分离项目
- 前端react
- 后台springboot1.5.x

##下载一些依赖
- PropType
```shell script
npm install --save prop-types
```
- axios
```shell script
npm install --save axios
```
- markdown
```shell script
npm install --save showdown
```
- bootstrap
```shell script
npm install --save bootstrap
```
- 发布订阅PubSubJS库，组件间通信
```shell script
npm install --save pubsub-js
```
- Router   react-router-dom网页/react-router-native手机端/react-router-anywhere服务器端
```shell script
npm install --save react-router-dom
```
-- markdown插件
```shell script
npm install --save react-markdown
```
-- redus
```shell script
npm install --save redux
```
-- react-redus
```shell script
npm install --save react-redux
```
-- redux异步插件
```shell script
npm install --save redux-thunk
```
-- redux管理state react无法查看，需要chrome插件和依赖
```shell script
npm install --save-dev redux-devtools-extension
```


##SPA应用 single page web application

##路由
路由即映射关系 key：value；key是路由路径，value为function/component
1. 后台路由
    1. node服务器端路由，value是function，处理客户端提交的请求并返回响应数据
2. 前台路由
    1. 浏览器端路由，value是component组件，当请求的是路由path时浏览器端美欧发送http请求，更新界面显示对应组件
    2. 实现：
        1. react-router:
            1. 组件（路由组件非路由组件）
            ```shell script
                <BrowserRouter>:带#号
                <HashRouter>:不带#号
                <Router>:路由
                <Redirect>:重定向
                <Link>:自动请求链接
                <NavLink>:导航链接
                <Switch>:可包含多个<Router>
                history对象
                match对象
                withRouter对象
            ```
        2. 如何编写路由效果
            1. 编写路由组件
            2. 在父路由组件中指定
                1. 路由链接 <NavLink>
                2. 路由<Route>
3. UI组件，容器组件，解耦
    1. UI组件：

    2. 容器组件：redux组件包装