"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CajeroService = void 0;
const validaciones_1 = require("../utils/validaciones");
class CajeroService {
    cuenta;
    efectivoDisponible;
    constructor(cuenta, efectivoInicial) {
        this.cuenta = cuenta;
        this.efectivoDisponible = efectivoInicial;
    }
    consultarSaldo() {
        return `Saldo: ${this.cuenta.ConsultarSaldo()}`;
    }
    Deposito(monto) {
        if (!(0, validaciones_1.esValido)(monto) || monto <= 0) {
            throw new Error("Monto inválido para depósito");
        }
        this.cuenta.Deposito(monto);
        this.efectivoDisponible += monto;
        return `Depósito exitoso. Saldo: ${this.cuenta.ConsultarSaldo()}`;
    }
    retiro(monto) {
        if (!(0, validaciones_1.esValido)(monto) || monto <= 0) {
            throw new Error("Monto inválido para retiro");
        }
        if (monto > this.efectivoDisponible) {
            throw new Error("El cajero no tiene suficiente efectivo");
        }
        const retiroExitoso = this.cuenta.retiro(monto);
        if (!retiroExitoso) {
            throw new Error("Fondos insuficientes en la cuenta");
        }
        this.efectivoDisponible -= monto;
        return `Retiro exitoso. Saldo: ${this.cuenta.ConsultarSaldo()}`;
    }
}
exports.CajeroService = CajeroService;
//# sourceMappingURL=CajeroService.js.map