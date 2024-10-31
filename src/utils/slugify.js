// src/utils/slugify.js

export const slugify = (text) => {
    return text
      .toString()
      .toLowerCase()
      .normalize('NFD') // Normalizar para eliminar acentos
      .replace(/[\u0300-\u036f]/g, '') // Eliminar caracteres diacríticos
      .replace(/\s+/g, '-') // Reemplazar espacios por guiones
      .replace(/[^\w\-]+/g, '') // Eliminar caracteres especiales
      .replace(/\-\-+/g, '-') // Reemplazar múltiples guiones por uno
      .replace(/^-+/, '') // Eliminar guiones al inicio
      .replace(/-+$/, ''); // Eliminar guiones al final
  };
  