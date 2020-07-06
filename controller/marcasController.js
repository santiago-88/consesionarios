const fs = require("fs");

let consesionarias = JSON.parse(
    fs.readFileSync("./data/consesonarias.json", "utf-8")
);

let marcas = {
    listarMarcas: function (req, res) {
        res.set({ "content-type": "text/plain;charset=utf-8" });
        res.write("--------Bienvenido a nuestra sección de marcas---------\n");
        res.write("todas las marcas son: \n\n");

        let autos = consesionarias.flatMap((con) => {
            return con.autos;
        });

        let marcas = autos.map(function (auto) {
            return auto.marca;
        });

        new Set(marcas).forEach(function (marca) {
            res.write("* -" + marca);
            res.write("\n");
        });

        res.end();
    },
    listarAuto: function (req, res) {
        res.set({ "content-type": "text/plain;charset=utf-8" });

        let idMarca = req.params.marca;
        let mensaje = false;
        consesionarias.forEach(function (suc) {
            suc.autos.forEach(function (auto) {
                if (idMarca == auto.marca) {
                    res.write(
                        `    
                   Marca: ${auto.marca}
                   Modelo: ${auto.modelo}
                   Año: ${auto.anio}    
                    `
                    );
                    mensaje = true;
                }
            });
        });
        if (mensaje == false) {
            res.write("Disculpe, no disponemos de esa marca.");
        }
        res.end();
    },
};

module.exports = marcas;
