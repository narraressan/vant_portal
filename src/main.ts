import app from "./app";

// project theme
import "vant/lib/index.css";

// internal plug-in / services
import routes from "./routes";
import locales from "./locales";

app.use(routes);
app.use(locales);

app.mount("#app");
