FROM node:20

WORKDIR /usr/src/app

COPY . .

RUN npm install -g pnpm

# ⚡ Avísale al prepare.mjs que estamos en Docker
ENV DOCKER_BUILD=true

# ⚡ Instala todo con scripts normalmente
RUN pnpm install

# ⚡ Aumenta memoria disponible para el build
ENV NODE_OPTIONS=--max-old-space-size=8192

# ⚡ Build
RUN npm run build

EXPOSE 5678

CMD ["npm", "run", "start"]
