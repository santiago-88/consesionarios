const fs = require("fs");
const consesionarias = JSON.parse(
    fs.readFileSync("./data/consesonarias.json", "utf-8")
);

const autos = {
    listarAutos: (req, res) => {
        res.set({ "content-type": "text/plain;charset=utf-8" });

        res.write("Los modelos de autos son: \n");
        res.write("--\n\n");
        let autos = [];
        consesionarias.forEach(function (con) {
            con.autos.forEach(function (auto) {
                autos.push(auto);
            });
            autos.forEach(function (dato) {
                res.write("Marca: " + dato.marca + "\n");
                res.write("Modelo: " + dato.modelo + "\n");
                res.write("Año: " + dato.anio + "\n");
                res.write("Color: " + dato.color + "\n");
                res.write("----" + "\n");
            });
        });

        res.end();
    },
};
module.exports = autos;
