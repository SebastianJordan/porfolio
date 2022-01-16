FROM  node:17-alpine
WORKDIR /porfolio
COPY app/porfolio .
ENV NODE_ENV production
RUN npm install
EXPOSE 3000
ENV PORT 3000
RUN  npm install --save-dev eslint
RUN npm run build
CMD ["npm", "run","start"]
# docker build -t sj/porfolio .  --label sj