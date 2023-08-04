export interface IDoctorCreate {
  name: string;
  password: string;
  advice: string;
  adviceState: string;
  adviceNumber: number;
  specialty: string;
  rqe: number;
  memedSinc: boolean;
  genre: string;
  born: string;
  email: string;
  rg: number;
  cpf: number;
  cns: number;
  state: string;
  city: string;
  street: string;
  numberHouse: number;
  disctrict: string;
  complement: string;
  clinicName: string;
}

export interface IDoctorUpdate {
  id: string;
  name: string;
  password: string;
  advice: string;
  adviceState: string;
  adviceNumber: number;
  specialty: string;
  rqe: number;
  memedSinc: boolean;
  genre: string;
  born: string;
  email: string;
  rg: number;
  cpf: number;
  cns: number;
  state: string;
  city: string;
  street: string;
  numberHouse: number;
  disctrict: string;
  complement: string;
  clinicName: string;
}
