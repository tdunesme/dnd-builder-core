FROM --platform=linux/amd64 node:20-slim
WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y \
  python3 make g++ libsqlite3-dev \
  && rm -rf /var/lib/apt/lists/*

RUN corepack enable && corepack prepare pnpm@10 --activate

# IMPORTANT: pnpm-workspace.yaml doit être présent avant l'install
COPY pnpm-workspace.yaml ./

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY prisma ./prisma
ENV DATABASE_URL="file:./dev.db"
RUN pnpm prisma generate

COPY . .
RUN pnpm build

EXPOSE 3000
CMD ["sh", "-c", "pnpm prisma migrate deploy && pnpm start:prod"]
