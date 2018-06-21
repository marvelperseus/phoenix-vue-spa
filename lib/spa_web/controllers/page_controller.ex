defmodule PheonixVueSPAWeb.PageController do
  use PheonixVueSPAWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
