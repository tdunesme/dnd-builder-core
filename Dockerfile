# Image de base Node.js légère
FROM node:20-alpine

# Dossier de travail dans le conteneur
WORKDIR /usr/src/app

# 1. Copier les fichiers de dépendances
COPY package*.json ./

# 2. Installer les dépendances
RUN npm install

# 3. Copier le schéma Prisma avant le reste (cache plus efficace)
COPY prisma ./prisma

# 👉 IMPORTANT : définir DATABASE_URL pour PRISMA AU BUILD
# (juste pour prisma generate; en runtime ce sera surchargé par .env)
ENV DATABASE_URL="file:./dev.db"

# 4. Copier le reste du code
COPY . .

# 5. Générer le client Prisma
RUN npx prisma generate

# 6. Builder l'application Nest
RUN npm run build

# 7. Exposer le port utilisé par Nest
EXPOSE 3000

# 8. Commande de démarrage :
#    - applique les migrations (SQLite) si nécessaires
#    - lance le serveur
CMD ["sh", "-c", "npx prisma migrate deploy && npm run start:prod"]
