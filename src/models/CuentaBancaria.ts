export interface IcuentaBancaria {
    nombre : string,
    NumeroCuenta : string,
    ConsultarSaldo() :number,
    Deposito(monto:number) : void,
    retiro(monto:number): boolean
}

export class CuentaBancaria implements IcuentaBancaria {
    private saldo:number;

    constructor(
        public NumeroCuenta: string,
        public nombre: string,
        saldoInicial: number = 0
    ) {
        this.saldo = saldoInicial;
    }

    ConsultarSaldo(): number {
        return this.saldo
    }

    Deposito(monto: number): void {
    this.saldo += monto;
    }

    retiro(monto: number): boolean {
        if (monto > this.saldo) return false;
        this.saldo -= monto;
        return true;
    }
}