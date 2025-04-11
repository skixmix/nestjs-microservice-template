FROM node:22-alpine AS base

# 1) Build
FROM base AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 2) Run
FROM base
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package*.json ./
RUN npm install --omit=dev

CMD ["node", "dist/main"]