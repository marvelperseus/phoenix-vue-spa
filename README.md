# Phoenix-Vue SPA 


> A Phoenix-Vue SPA starter project template In Build Watch mechanism.

## Features

- Phoenix Framework v1.3.3
- Webpack 4
- Vue + VueRouter + Vuex + VueI18n + ESlint
- Pages with dynamic import and custom layouts
- Login, register and password reset
- Authentication with ueberauth/guardian JWT
- Bootstrap 4 + Font Awesome 5

## Installation
Important: npm some bug and cant run webpack 4 please use yarn

```bash
# Install Phoenix requirement package
cd phoenix-vue-spa
mix deps.get

# Buil Phoenix
mix deps.compile

# Install SPA requirement package
cd assets
yarn

```
## Usage

#### Development

```bash
# first run yarn watch command and let yarn build vuejs package
cd assets
yarn watch

# after run Phoenix development server
cd ..
mix phx.server

```

#### Production

```bash
cd assets
yarn production
```

#### Inspired By cretueusebiu/laravel-vue-spa
https://github.com/cretueusebiu/laravel-vue-spa