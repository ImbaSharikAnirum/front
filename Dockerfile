# Используем официальный образ Node.js в качестве базового
FROM node:lts AS build

# Создаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальной исходный код в рабочую директорию
COPY . .

# Собираем приложение
RUN npm run build

# Создаем образ для запуска
FROM node:lts AS production

# Устанавливаем переменные окружения
ENV HOST=0.0.0.0
ENV PORT=3000

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем собранное приложение из предыдущего этапа
COPY --from=build /app/build /app/build

# Указываем порт, на котором будет работать приложение
EXPOSE 3000

# Устанавливаем зависимости для сервера (если требуется)
RUN npm install -g serve

# Запускаем приложение
CMD ["serve", "-s", "build", "-l", "3000"]
