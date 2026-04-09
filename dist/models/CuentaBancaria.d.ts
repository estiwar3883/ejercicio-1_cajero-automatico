import { ICuentaBancaria } from "../interfaces/ICuentaBancaria";
export declare class CuentaBancaria implements ICuentaBancaria {
    NumeroCuenta: string;
    nombre: string;
    private saldo;
    constructor(NumeroCuenta: string, nombre: string, saldoInicial?: number);
    ConsultarSaldo(): number;
    Deposito(monto: number): void;
    retiro(monto: number): boolean;
}
//# sourceMappingURL=CuentaBancaria.d.ts.map