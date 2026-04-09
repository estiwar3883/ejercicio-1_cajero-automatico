"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const CuentaBancaria_1 = require("./models/CuentaBancaria");
const CajeroService_1 = require("./services/CajeroService");
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
const cuenta = new CuentaBancaria_1.CuentaBancaria("001", "Estiven", 1000);
const cajero = new CajeroService_1.CajeroService(cuenta, 5000);
function mostrarMenu() {
    console.log("=== CAJERO ===");
    console.log("1. Ver saldo");
    console.log("2. Depositar");
    console.log("3. Retirar");
    console.log("4. Salir");
    rl.question("Elige una opcion: ", (opcion) => {
        if (opcion === "1") {
            console.log(cajero.consultarSaldo());
            mostrarMenu();
        }
        else if (opcion === "2") {
            rl.question("Monto a depositar: ", (monto) => {
                console.log(cajero.Deposito(Number(monto)));
                mostrarMenu();
            });
        }
        else if (opcion === "3") {
            rl.question("Monto a retirar: ", (monto) => {
                try {
                    console.log(cajero.retiro(Number(monto)));
                }
                catch (error) {
                    if (error instanceof Error) {
                        console.log("Error:", error.message);
                    }
                }
                mostrarMenu();
            });
        }
        else if (opcion === "4") {
            console.log("Adios");
            rl.close();
        }
        else {
            console.log("Opcion invalida");
            mostrarMenu();
        }
    });
}
mostrarMenu();
//# sourceMappingURL=index.js.map