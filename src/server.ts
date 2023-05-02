import app from "./app";

const port: number | unknown = 3333 || process.env.PORT;

app.listen(port, () => {
  console.log(`🚀 Server running in http://localhost${port}`);
});
