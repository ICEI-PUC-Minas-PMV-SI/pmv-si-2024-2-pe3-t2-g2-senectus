FROM alpine:3.19.1 AS base

RUN mkdir -p /usr/node/app
WORKDIR /usr/node/app

RUN apk add --no-cache npm=10.2.5-r0 && \
	rm -rf /var/cache/apk/*

ENV PNPM_HOME="/pnpm"
ENV PATH="${PNPM_HOME}:${PATH}"

COPY package.json .
COPY pnpm-lock.yaml .
COPY ./public ./public

#---------- mid stage ------------
FROM base AS mid_stage
COPY src ./src
RUN npm install -g pnpm@9.12.3

#---------- prod deps ------------
FROM mid_stage AS prod_deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

#--------- build stage -----------
FROM mid_stage AS builder

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build --no-lint

#------- release stage -----------
FROM base

COPY --from=prod_deps /usr/node/app/node_modules ./node_modules
COPY --from=builder /usr/node/app/.next ./.next

ENV PORT=8080

VOLUME ["/usr/node/app/node_modules"]

CMD [ "npm", "start", "-p ${PORT}" ]

EXPOSE 8080
