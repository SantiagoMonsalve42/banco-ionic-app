export interface Login{
    email: string;
    pass: string;
}
export interface Registro{
    email:string;
    password:string;
    primer_nombre:string;
    segundo_nombre?:string;
    primer_apellido:string;
    segundo_apellido?:string;
    tipo:string;
    tipo_cliente:string;
}
export enum TipoCliente{
    NATURAL,
    JURICA
}