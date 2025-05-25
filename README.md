# 📄 Generador de Currículums Profesional

¡Crea tu currículum ideal de forma rápida, intuitiva y personalizable!  
Esta aplicación web te permite generar CVs modernos, personalizar plantillas, gestionar tu experiencia profesional y exportar resultados listos para compartir.

## 🚀 Características Principales

- 🎨 **Plantillas elegantes**: Elige entre diferentes estilos de CV.
- 🧑‍💼 **Gestión de experiencias**: Añade estudios, habilidades y trabajos previos.
- 🔐 **Privacidad total**: Tus datos se almacenan localmente con `IndexedDB`, sin servidores externos.
- 🌐 **Soporte multilingüe**: Disponible en **español** e **inglés**.
- 📤 **Exportación fácil**: Guarda tu CV en PDF o imprímelo directamente.
- 📱 **Diseño responsive**: Totalmente adaptado para móviles y pantallas grandes.
- 🧠 **Entrada por voz**: Rellena campos usando tu voz.

---

## 🧭 Rutas Principales

| Ruta                           | Componente                  | Descripción                                                                 |
|--------------------------------|-----------------------------|-----------------------------------------------------------------------------|
| `/`                            | `Home`                      | Página de bienvenida con acceso al generador de CVs.                        |
| `/configurator/:id?`          | `TemplateConfigurator`      | Editor paso a paso para crear y personalizar tu CV.                         |
| `/configurator/:id/templates` | `Template`                  | Selección visual de plantillas.                                             |

---

## 🛠️ Tecnologías Usadas

- ⚛️ **React** + **React Router DOM**
- 💅 **Material UI (MUI)** para estilos consistentes y responsivos
- 🧩 **Day.js** para manejo de fechas multilingüe
- 🌍 **react-localization** para traducciones dinámicas
- 🗂️ **Context API** para el manejo de datos compartidos
- 🧠 **IndexedDB** para almacenamiento local seguro (¡sin servidores ni rastreos!)
  > Todos tus datos se guardan directamente en tu navegador. Nadie más los ve.
  
---

## 📦 Instalación y Uso

```bash
# Clona el repositorio
git clone https://github.com/tu-usuario/cv-generator.git
cd cv-generator

# Instala dependencias
npm install

# Inicia el servidor de desarrollo
npm run dev
