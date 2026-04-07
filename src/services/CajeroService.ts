import { CuentaBancaria } from "../models/CuentaBancaria";
import { esValido } from "../utils/validaciones";

export interface ICajeroService {
    consultarSaldo(): string;
    Deposito(monto: number): string;
    retiro(monto: number): string;
    }

    export class CajeroService implements ICajeroService {
    private efectivoDisponible: number;

    constructor(
        private cuenta: CuentaBancaria,
        efectivoInicial: number
    ) {
        this.efectivoDisponible = efectivoInicial;
    }

    consultarSaldo(): string {
        return `Saldo: ${this.cuenta.ConsultarSaldo()}`;
    }

    Deposito(monto: number): string {
        if (!esValido(monto) || monto <= 0) {
        throw new Error("Monto inválido para depósito");
        }

        this.cuenta.Deposito(monto);
        this.efectivoDisponible += monto;

        return `Depósito exitoso. Saldo: ${this.cuenta.ConsultarSaldo()}`;
    }

    retiro(monto: number): string {
        if (!esValido(monto) || monto <= 0) {
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