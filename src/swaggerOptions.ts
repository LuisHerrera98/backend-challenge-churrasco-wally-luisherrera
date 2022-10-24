import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import { Application ,Request, Response } from 'express';

export const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Documentation challenge Churrasco-wally",
        version: "1.0.0",
        description: "A simple express library API",
      }
    },
    apis: ["./src/routes/*.ts", "./src/database/database.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app: Application) => {
  app.use("/api/v1/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
  app.get("/api/v1/docs.json", (req: Request, res: Response) => {
    res.setHeader("Content-type", "application/json");
    res.send(swaggerSpec);
  })

  console.log(
    `Version 1 Docs are available at http://localhost:${app.get('port')}/api/v1/docs`
  );
};

export default swaggerDocs;
