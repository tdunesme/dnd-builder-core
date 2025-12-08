# 🧙‍♂️ D&D Character Builder — Backend

Backend de l’application **D&D Character Builder 5e (2024)**, développé avec **NestJS**, **Prisma**, **SQLite** et une authentification **JWT**.  
Il gère l’inscription, la connexion et les personnages des utilisateurs.

---

## 🚀 Installation

```bash
npm install
```

---

## 🔧 Configuration

Créer un fichier **`.env`** à la racine :

```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="your-secret-key"
JWT_EXPIRES_IN="1d"
```

---

## 🗄️ Base de données

Appliquer les migrations Prisma :

```bash
npx prisma migrate dev
```

Ouvrir Prisma Studio :

```bash
npx prisma studio
```

---

## ▶️ Lancer le serveur

### Mode développement

```bash
npm run start:dev
```

L’API sera disponible sur :

```
http://localhost:3000
```

---

## 🔐 Authentification

### Inscription

```
POST /auth/register
```

### Connexion

```
POST /auth/login
```

Retourne :

```json
{
  "id": "user-id",
  "email": "user@example.com",
  "accessToken": "jwt-token"
}
```

### Accès aux routes protégées

```
Authorization: Bearer <accessToken>
```

---

## 🧙‍♂️ Routes Characters

Toutes nécessitent un JWT valide.

### Créer un personnage

```
POST /characters
```

### Lister mes personnages

```
GET /characters
```

### Obtenir un personnage

```
GET /characters/:id
```

### Supprimer un personnage

```
DELETE /characters/:id
```

---

## 🧪 Tests

Tests unitaires :

```bash
npm run test
```

Tests E2E :

```bash
npm run test:e2e
```

---

## 📄 Notes

- Base locale : **SQLite**
- ORM : **Prisma**
- Auth : **JWT + Passport**
- Le SRD 5.2 sera intégré dans les modules espèces / classes / backgrounds.
