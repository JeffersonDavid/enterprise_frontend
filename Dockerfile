# Usa una imagen base con Node.js y establece el directorio de trabajo
FROM node:20

WORKDIR /usr/src/app

# Copia el resto de los archivos de la aplicación
RUN git clone https://github.com/JeffersonDavid/enterprise_refactor.git
# Instala las dependencias utilizando npm
RUN npm install
# Expone el puerto en el que la aplicación de Next.js se ejecutará (por defecto es 3000)
EXPOSE 3000

CMD ["npm", "run", "dev"]

