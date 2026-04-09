import { ICuentaBancaria } from "../interfaces/ICuentaBancaria";

export class CuentaBancaria implements ICuentaBancaria {
    private saldo: number;

    constructor(
        public NumeroCuenta: string,
        public nombre: string,
        saldoInicial: number = 0
    ) {
        this.saldo = saldoInicial;
    }

    ConsultarSaldo(): number {
        return this.saldo;
    }

    Deposito(monto: number): void {
        this.saldo += monto;
    }

    retiro(monto: number): boolean {
        if (monto > this.saldo) {
            return false;
        }

        this.saldo -= monto;
        return true;
    }
}
