# Используем официальный образ Node.js в качестве базового
FROM node:lts AS build

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем файл package.json и package-lock.json в рабочую директорию
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все исходные файлы и директории
COPY . .

# Собираем приложение
RUN npm run build

# Используем другой образ для запуска
FROM node:lts AS runtime

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем папку сборки из предыдущего этапа
COPY --from=build /app/build ./build

# Копируем package.json для глобальной установки serve
COPY --from=build /app/package.json ./

# Устанавливаем serve для обслуживания статических файлов
RUN npm install -g serve

# Устанавливаем переменные окружения
ENV HOST=0.0.0.0
ENV PORT=3000

# Указываем порт, на котором будет работать приложение
EXPOSE 3000

# Запускаем приложение
CMD ["serve", "-s", "build", "-l", "3000"]
