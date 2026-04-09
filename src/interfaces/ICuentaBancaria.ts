export interface ICuentaBancaria {
    nombre: string;
    NumeroCuenta: string;
    ConsultarSaldo(): number;
    Deposito(monto: number): void;
    retiro(monto: number): boolean;
}
