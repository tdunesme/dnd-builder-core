🧙‍♂️ D&D Character Builder — Backend

Backend de l’application D&D Character Builder 5e (2024), développé avec NestJS, Prisma, SQLite et une authentification JWT.
Il permet d’enregistrer des utilisateurs, de se connecter, et de gérer des personnages (CRUD).
Le frontend Vue 3 consomme cette API.

🚀 Installation
npm install

🔧 Configuration

Créer un fichier .env à la racine :

DATABASE_URL="file:./dev.db"
JWT_SECRET="your-secret-key"
JWT_EXPIRES_IN="1d"

🗄️ Base de données

Appliquer les migrations Prisma :

npx prisma migrate dev

Ouvrir Prisma Studio (visualisation de la DB) :

npx prisma studio

▶️ Lancer le serveur
Mode développement
npm run start:dev

API accessible sur :

http://localhost:3000

🔐 Authentification

POST /auth/register → créer un compte

POST /auth/login → renvoie { accessToken }

Les routes protégées utilisent :

Authorization: Bearer <accessToken>

🧙‍♂️ Routes Characters

Toutes nécessitent un JWT valide :

POST /characters → créer un personnage

GET /characters → lister les personnages du joueur

GET /characters/:id → afficher un personnage

DELETE /characters/:id → supprimer un personnage

🧪 Tests

Tests unitaires :

npm run test

Tests E2E :

npm run test:e2e

📄 Notes

Base locale : SQLite

ORM : Prisma

Le projet suit une architecture modulaire NestJS

Le SRD 5.2 sera intégré plus tard pour les espèces, classes et backgrounds
