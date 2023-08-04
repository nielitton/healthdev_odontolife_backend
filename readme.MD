# Documentação

## Primeiros passos

### Intalação
Para fazer a instalação da aplicação, você precisa ter o node instalado.
Você pode clonar esse repositório na sua maquina com o comando

git clone git@github.com:nielitton/healthdev_odontolife_backend.git

Assim que o repositorio for clonado na sua maquina, você pode entrar nele com o comando

cd healthdev_odontolife_backend

logo após isso, no seu terminal, você precisa instalar as dependências do aplicativo, rode o comando

yarn install

Este aplicativo possui a biblioteca do prisma, então também precisamos que ele gere seus arquivos de migrações, com o comando.

yarn prisma migrate dev

logo após isso o seu aplicativo já está pronto para roda, basta usar o comando

yarn run dev -> Caso queira entrar em modo de desenvolvimento
yarn run start -> Em modo de produção

Pronto sua aplicação está rodando na sua maquina local, na porta 3333

# Aplicação está no ar

Nossa aplicação também está no ar, hospedada no render. Com a seguinte URL.

https://odontolife-backend.onrender.com

### API References

/unity

Para criar ou pegar informações da sua unidade

GET/POST

GET: 
NO BODY PARAMS ->

RESPONSE PARAMS ->
[
	{
		"id": "789a566c-7f87-4764-8040-cb8c6b1307dc",
		"name": "Unidade 1"
	}
]

POST:
BODY PARAMS ->
{
	"name": "Unidade 1"
}
RESPONSE PARAMS ->
{
	"id": "789a566c-7f87-4764-8040-cb8c6b1307dc",
	"name": "Unidade 1"
}

--------------------------------------------------------------------------------

/clinic

Para criar ou pegar informações das suas clinica

GET/POST

GET: 
NO BODY PARAMS ->

RESPONSE PARAMS ->
[
	{
		"id": "cdcda0f3-efe8-440b-a7cd-4b234826c8a3",
		"name": "Consultorio 1",
		"unityName": "Unidade 1"
	}
]

POST:
BODY PARAMS ->
{
	"name": "Consultorio 1",
	"unityName": "Unidade 1"
}

RESPONSE PARAMS ->
{
	"id": "cdcda0f3-efe8-440b-a7cd-4b234826c8a3",
	"name": "Consultorio 1",
	"unityName": "Unidade 1"
}


--------------------------------------------------------------------------------

/doctor

GET/POST/PATCH

GET: 
NO BODY PARAMS ->

RESPONSE PARAMS ->
[
	{
		"id": "2918658e-3ba5-4ccc-9f13-6848fd45f314",
		"name": "Geraldo",
		"password": "12345",
		"advice": "CRM",
		"adviceState": "CE",
		"adviceNumber": 1565,
		"specialty": "Cardiologia",
		"rqe": 123456,
		"memedSinc": true,
		"genre": "Masculino",
		"born": "26/11/2000",
		"email": "geraldo@email.com",
		"rg": 1854984981,
		"cpf": 148596416,
		"cns": 1651,
		"state": "CE",
		"city": "Fortaleza",
		"street": "Teste",
		"numberHouse": 60,
		"disctrict": "Caucaia",
		"complement": "teste",
		"clinicName": "Consultorio 1"
	}
]

Irá lhe retornar um array de doctors.

/doctor/:id

GET: 
NO BODY PARAMS ->

RESPONSE PARAMS ->
{
	"id": "2918658e-3ba5-4ccc-9f13-6848fd45f314",
	"name": "Geraldo",
	"password": "12345",
	"advice": "CRM",
	"adviceState": "CE",
	"adviceNumber": 1565,
	"rqe": 123456,
	"memedSinc": true,
	"genre": "Masculino",
	"born": "26/11/2000",
	"email": "geraldo@email.com",
	"rg": 1854984981,
	"cpf": 148596416,
	"cns": 1651,
	"state": "CE",
	"city": "Fortaleza",
	"street": "Teste",
	"numberHouse": 60,
	"disctrict": "Caucaia",
	"complement": "teste",
	"clinic": {
		"id": "cdcda0f3-efe8-440b-a7cd-4b234826c8a3",
		"name": "Consultorio 1",
		"unityName": "Unidade 1"
	}
}

Irá lhe retornar apenas o doctor que foi passado o ID na requisição

/doctor

POST:
BODY PARAMS ->
{
	"name": "Geraldo", 
	"password": "12345", 
	"advice": "CRM", 
	"adviceState": "CE", 
	"adviceNumber": 1565, 
	"clinicName": "Consultorio 1", <- Precisa ter uma clinica criada para poder passar
	"specialty": "Cardiologia",
	"rqe": 123456, 
	"memedSinc": true,
  "genre": "Masculino", 
	"born": "26/11/2000", 
	"email": "geraldo@email.com", 
	"rg": 1854984981, 
	"cpf": 148596416, 
	"cns": 1651, 
	"state": "CE", 
	"city": "Fortaleza", 
	"street": "Teste", 
	"numberHouse": 60, 
	"disctrict": "Caucaia", 
	"complement": "teste"
}
RESPONSE PARAMS ->
{
	"id": "2918658e-3ba5-4ccc-9f13-6848fd45f314",
	"name": "Geraldo",
	"password": "12345",
	"advice": "CRM",
	"adviceState": "CE",
	"adviceNumber": 1565,
	"specialty": "Cardiologia",
	"rqe": 123456,
	"memedSinc": true,
	"genre": "Masculino",
	"born": "26/11/2000",
	"email": "geraldo@email.com",
	"rg": 1854984981,
	"cpf": 148596416,
	"cns": 1651,
	"state": "CE",
	"city": "Fortaleza",
	"street": "Teste",
	"numberHouse": 60,
	"disctrict": "Caucaia",
	"complement": "teste",
	"clinicName": "Consultorio 1"
}

Apenas na requisição de /unity você não podera criar elementos iguais.