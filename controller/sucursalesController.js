const fs = require("fs");

let consesonarias = JSON.parse(
    fs.readFileSync("./data/consesonarias.json", "utf-8")
);

let sucursales = {
    listar: function (req, res) {
        res.set({ "content-type": "text/plain;charset=utf-8" });
        res.write(`                                 -------------------Sucursales-----------------

     Nuestros datos de sucursales:

     `);
        consesonarias.forEach(function (sucur) {
            res.write(`
         *${sucur.sucursal} :\n
         -Dirección: ${sucur.direccion}.\n
         -Teléfono:-${sucur.telefono}.\n`);
        });
        res.end();
    },

    info: function (req, res) {
        res.set({ "content-type": "text/plain;charset=utf-8" });

        let idSuc = req.params.sucursal;

        let sucursalBuscada = consesonarias.find(function (sucur) {
            return idSuc == sucur.sucursal;
        });

        if (sucursalBuscada != undefined) {
            res.write(sucursalBuscada.sucursal + "\n");
            res.write("-Dirección:" + sucursalBuscada.direccion + "\n");
            res.write("-Telefono" + sucursalBuscada.telefono + "\n");
            res.write("Estos son los autos de la sucursal " + idSuc + ":\n\n");
            sucursalBuscada.autos.forEach(function (auto) {
                res.write(auto.marca);
            });
        } else {
            res.write("No se encuentra esta sucursal: " + idSuc);
        }

        res.end();
    },
};

module.exports = sucursales;
