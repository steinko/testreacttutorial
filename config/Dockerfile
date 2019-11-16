FROM node:12.2.0-alpine
COPY build ./
RUN ["npm", "install", "-g", "serve"]
CMD ["serve", "-s","-p","5000", "build"]
EXPOSE 5000