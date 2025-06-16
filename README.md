# Belo Challenge - Transaction Management API

Este proyecto es una API REST construida con NestJS para la gestión de transacciones, desarrollada como parte del desafío técnico de Belo.

## 🚀 Tecnologías Utilizadas

- **NestJS**: Framework Node.js para construir aplicaciones del lado del servidor
- **Swagger**: Documentación de la API

## 📋 Prerrequisitos

- Node.js
- npm o yarn

## 🔧 Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/belo-challenge.git
cd belo-challenge
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:
```env
SUPABASE_URL=
SUPABASE_ANON_KEY=
PORT=3000
```
Los valores de dichas variables fueron compartidas por HackerRank

4. Iniciar el servidor:
```bash
npm run start

```

## 📚 Documentación de la API

La documentación completa de la API está disponible a través de Swagger UI en:
```
http://localhost:3000/api
```

### Endpoints Principales

#### Transacciones
- `GET /transactions/:userId`: Obtener transacciones de un usuario (creditos o debitos)
- `POST /transactions`: Crear una nueva transacción
- `PATCH /transactions/:id/reject`: Rechazar una transacción pendiente
- `PATCH /transactions/:id/approve`: Rechazar una transacción pendiente


## 🧪 Testing

Para ejecutar los tests:
```bash
npm run test

```
## 📦 Estructura del Proyecto

```
src/
├── modules/
│   └── transactions/
│       ├── createTransaction/
│       ├── getTransactionsByUser/
│       ├── approveTransaction/
│       └── rejectTransaction/
├── models/
├── shared/
│   └── errors/

└── main.ts
```