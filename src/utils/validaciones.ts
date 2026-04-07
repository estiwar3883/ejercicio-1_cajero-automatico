// Función genérica reutilizable
export function esValido<T>(valor: T): boolean {
    return valor !== null && valor !== undefined;
}