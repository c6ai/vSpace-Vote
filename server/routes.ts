import type { Express } from "express";
import { createServer, type Server } from "http";
import { setupAuth } from "./auth";

export function registerRoutes(app: Express): Server {
  // Set up authentication routes
  setupAuth(app);
  
  // Documentation endpoints
  app.get('/api/requirements', (_req, res) => {
    res.json({
      requirements: [
        {
          id: '9.1.1.1',
          title: 'Standard Client-Side Technologies',
          description: 'vSpaceVote\'s user interface shall use standard client-side technologies without voter installation of specialty plug-ins.',
          status: 'completed'
        },
        // Add more requirements
      ]
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
