"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CuentaBancaria = void 0;
class CuentaBancaria {
    NumeroCuenta;
    nombre;
    saldo;
    constructor(NumeroCuenta, nombre, saldoInicial = 0) {
        this.NumeroCuenta = NumeroCuenta;
        this.nombre = nombre;
        this.saldo = saldoInicial;
    }
    ConsultarSaldo() {
        return this.saldo;
    }
    Deposito(monto) {
        this.saldo += monto;
    }
    retiro(monto) {
        if (monto > this.saldo) {
            return false;
        }
        this.saldo -= monto;
        return true;
    }
}
exports.CuentaBancaria = CuentaBancaria;
//# sourceMappingURL=CuentaBancaria.js.map