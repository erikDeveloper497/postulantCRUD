export class Postulant {

    constructor(_id = '', name = '', appatern= '', apmatern='', edad= 0, address= '', genero = '', telefono =0, email='', expLab=''){
        this._id=_id;
        this.name=name;
        this.appatern=appatern;
        this.apmatern=apmatern;
        this.edad=edad;
        this.address=address;
        this.genero=genero;
        this.telefono=telefono;
        this.email=email;
        this.expLab=expLab;
    }
    _id: string;
    name: string;
    appatern: string;
    apmatern:string;
    edad: number;
    address: string;
    genero: string;
    telefono: number;
    email: string;
    expLab: string;
}
