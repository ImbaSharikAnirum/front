# Используем официальный Node.js образ как базовый
FROM node:18 AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь проект
COPY . .

# Выполняем сборку проекта
RUN npm run build

# Используем официальный Nginx образ для обслуживания статических файлов
FROM nginx:alpine

# Копируем сборку из предыдущего этапа
COPY --from=build /app/build /usr/share/nginx/html

# Экспонируем порт
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
