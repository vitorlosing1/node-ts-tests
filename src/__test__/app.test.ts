import request from "supertest";
import app from "../app"; // Importa o aplicativo Express

describe("GET /api/hello", () => {
  test("deve retornar Hello World ", async () => {
    const response = await request(app).get("/api/hello");
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Hello World!");
  });

  test("chamada errada de api", async () => {
    const response = await request(app).get("/api/hell");
    expect(response.status).toBe(404);
  });
});
