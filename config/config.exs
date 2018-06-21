# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :spa,
  namespace: PheonixVueSPA,
  ecto_repos: [PheonixVueSPA.Repo]

# Configures the endpoint
config :spa, PheonixVueSPAWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "eDrLiSj149D2iwDU2cGP5Dijk+Iz5OY3LM7YyHsMdonFiUFnUlS2cA6VW31Osz0P",
  render_errors: [view: PheonixVueSPAWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: PheonixVueSPA.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:user_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
