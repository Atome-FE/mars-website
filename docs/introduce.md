# 简介

## 什么是Mars系统
TODO

## 开始上手

``` bash
git clone git@github.com:Atome-FE/Mars.git
```
### 配置

1、修改server下的，- application-local.yml里的spring > datasource > url 的IP为本机IP

2、[下载gradle](https://www.cnblogs.com/ycyzharry/p/11089016.html)

3、安装docker并登录

### 启动
```bash
# 启动前端:
./start.sh init-f # 首次启动(包含npm install)

./start.sh f # 以后启动命令

# 启动后端:
./start.sh b

```

其目录结构大致如下：

```
├─ client                 # 前端代码
├─ dev-docker
│  ├─ base                # mysql初始化数据
│  └─ docker-compose.yml  # 启动 mysql和后端接口
├─ server                 # 后端代码
├─ docs
│  ├─ README.md
│  ├─ zh
│  └─ .vuepress
│     └─ config.js
└─ ...
```



<!-- ## Todo
- xx
- xx -->