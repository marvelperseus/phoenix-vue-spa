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

### Config your secret and db connection for production
```bash
use Mix.Config

# In this file, we keep production configuration that
# you likely want to automate and keep it away from
# your version control system.

# You can generate a new secret by running:
#
#     mix phx.gen.secret
config :foo, Foo.Endpoint,
  secret_key_base: "A LONG SECRET"

# Configure your database
config :foo, Foo.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "postgres",
  database: "foo_prod",
  size: 20 # The amount of database connections in the pool
```
### Config your env and assets for production
```bash
$ mix deps.get --only prod
$ MIX_ENV=prod mix compile

# Compile assets
$ cd assets
$ yarn production

$ mix phx.digest

# Custom tasks (like DB migrations)
$ MIX_ENV=prod mix ecto.migrate

# Finally run the server
$ PORT=4001 MIX_ENV=prod mix phx.server

```

#### Inspired By cretueusebiu/laravel-vue-spa
https://github.com/cretueusebiu/laravel-vue-spa