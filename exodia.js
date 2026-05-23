const express = require("express");
const app = express();

app.use(express.json());

const exodia = {
  cabeza: "Exodia, el Prohibido (La cabeza)",
  brazoDerecho: "Brazo Derecho del Prohibido",
  brazoIzquierdo: "Brazo Izquierdo del Prohibido",
  piernaDerecha: "Pierna Derecha del Prohibido",
  piernaIzquierda: "Pierna Izquierda del Prohibido"
};

app.post("/invocar-exodia", (req, res) => {
  const body = req.body;

  const errores = [];

  if (body.cabeza !== exodia.cabeza) errores.push("Cabeza incorrecta");
  if (body.brazoDerecho !== exodia.brazoDerecho) errores.push("Brazo derecho incorrecto");
  if (body.brazoIzquierdo !== exodia.brazoIzquierdo) errores.push("Brazo izquierdo incorrecto");
  if (body.piernaDerecha !== exodia.piernaDerecha) errores.push("Pierna derecha incorrecta");
  if (body.piernaIzquierda !== exodia.piernaIzquierda) errores.push("Pierna izquierda incorrecta");

  if (errores.length > 0) {
    return res.status(400).json({
      status: "ERROR",
      mensaje: "No se pudo invocar a Exodia",
      errores
    });
  }

  return res.json({
    status: "OK",
    mensaje: "☠️ EXODIA HA SIDO INVOCADO ☠️"
  });
});

app.listen(3000, () => {
  console.log("API corriendo en http://localhost:3000");
});