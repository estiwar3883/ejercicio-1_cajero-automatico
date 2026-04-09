export interface ICajeroService {
    consultarSaldo(): string;
    Deposito(monto: number): string;
    retiro(monto: number): string;
}
