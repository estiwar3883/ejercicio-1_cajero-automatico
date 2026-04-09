import { ICajeroService } from "../interfaces/ICajeroService";
import { CuentaBancaria } from "../models/CuentaBancaria";
export declare class CajeroService implements ICajeroService {
    private cuenta;
    private efectivoDisponible;
    constructor(cuenta: CuentaBancaria, efectivoInicial: number);
    consultarSaldo(): string;
    Deposito(monto: number): string;
    retiro(monto: number): string;
}
//# sourceMappingURL=CajeroService.d.ts.map