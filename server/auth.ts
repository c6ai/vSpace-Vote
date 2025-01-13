import { type Express } from "express";
import session from "express-session";
import createMemoryStore from "memorystore";

declare global {
  namespace Express {
    interface User {
      id: string;
      email: string;
    }
  }
}

export function setupAuth(app: Express) {
  const MemoryStore = createMemoryStore(session);
  const sessionSettings: session.SessionOptions = {
    secret: process.env.REPL_ID || "vspacevote-secret",
    resave: false,
    saveUninitialized: false,
    cookie: {},
    store: new MemoryStore({
      checkPeriod: 86400000, // prune expired entries every 24h
    }),
  };

  if (app.get("env") === "production") {
    app.set("trust proxy", 1);
    sessionSettings.cookie = {
      secure: true,
    };
  }

  app.use(session(sessionSettings));

  // Proxy Supabase auth endpoints
  app.get("/api/user", (req, res) => {
    if (req.session.user) {
      return res.json(req.session.user);
    }
    res.status(401).send("Not authenticated");
  });

  app.post("/api/auth/callback", (req, res) => {
    const user = req.body;
    req.session.user = user;
    res.json({ message: "Session updated" });
  });

  app.post("/api/logout", (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).send("Failed to logout");
      }
      res.json({ message: "Logged out successfully" });
    });
  });
}
