# Используем официальный образ Node.js в качестве базового
FROM node:lts AS build

# Устанавливаем pnpm
RUN npm install -g pnpm

# Создаем рабочую директорию
WORKDIR /app

# Копируем файлы для установки зависимостей
COPY package.json pnpm-lock.yaml ./

# Устанавливаем зависимости
RUN pnpm install

# Копируем остальной исходный код в рабочую директорию
COPY . .

# Собираем приложение
RUN pnpm build

# Используем другой образ для запуска
FROM node:lts AS runtime

# Создаем рабочую директорию
WORKDIR /app

# Копируем собранное приложение из предыдущего этапа
COPY --from=build /app/build ./build

# Устанавливаем переменные окружения
ENV HOST=0.0.0.0
ENV PORT=3000

# Указываем порт, на котором будет работать приложение
EXPOSE 3000

# Запускаем приложение
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
