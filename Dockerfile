# ---- Dependencies ----
FROM node:20-alpine3.20 AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ---- Builder ----
FROM node:20-alpine3.20 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG NEXT_PUBLIC_API_WEBSITE_URL
ENV NEXT_PUBLIC_API_WEBSITE_URL=$NEXT_PUBLIC_API_WEBSITE_URL

ARG NEXT_PUBLIC_MAPTILER_API_KEY
ENV NEXT_PUBLIC_MAPTILER_API_KEY=$NEXT_PUBLIC_MAPTILER_API_KEY

RUN npm run build

# ---- Runner ----
FROM node:20-alpine3.20 AS runner
WORKDIR /app
ENV NODE_ENV=production

# Mise à jour des paquets système
RUN apk upgrade --no-cache

# Supprimer npm et npx, inutiles dans le runtime standalone
RUN rm -rf /usr/local/lib/node_modules/npm \
    /usr/local/bin/npm \
    /usr/local/bin/npx

# Utilisateur non-root pour la sécurité
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
