# Calculadora React Avanzada 

Calculadora interactiva con pruebas unitarias, historias de Storybook y cumplimiento de estándares de código.

El estilo de la calculadora fue basado en el estilo de la calculadora de mi telefono Samsung. La cual se ve asi:
#### Calculadora de mi celular
![Calculadora de mi celular](image-1.png)

#### Calculadora hecha por mi.
![Calculadora](image.png)


## Características Clave 
- Operaciones básicas: `+`, `-`, `×`, `÷`, `%`
- Manejo de errores para:
  - Números negativos (muestra `ERROR`)
  - Límite de 9 dígitos
  - Overflow (>999,999,999)
- Componentes modulares:
  - `<Display>`: Pantalla con formato dinámico
  - `<Keypad>`: Teclado numérico interactivo
  - `<Button>`: Botones reutilizables
- pruebas unitarias
-  historias de Storybook
- Custom Hook: `useCalculator` para lógica central

## Tecnologías Utilizadas 🛠
- **React 18** + Vite
- **Vitest** + Testing Library
- **Storybook 7**
- JavaScript Standard Style (sin puntos y coma)

## Instalación y Uso 

```bash
# 1. Clonar repositorio
git clone https://github.com/DiegoLinares11/Proyecto-Calculadora
cd calculadora-react

# 2. Instalar dependencias
npm install

# 3. Modos de ejecución:
npm run dev          # Inicia servidor de desarrollo
npm run build        # Crea versión de producción
npm test             # Ejecuta pruebas unitarias
npm run lint         # Verifica estándares de código
npm run storybook    # Abre Storybook (http://localhost:6006)

```
Estructura del Proyecto 
```bash
src/
├── components/      # Componentes UI
│   ├── Button.jsx   # Botón reutilizable
│   ├── Display.jsx  # Pantalla de calculadora
│   ├── Keypad.jsx   # Teclado numérico
│   └── Calculator.jsx # Componente principal
├── hooks/
│   └── useCalculator.js # Lógica de negocio
├── tests/           # Pruebas unitarias
├── stories/         # Historias de Storybook
```
### Testing 

Suite de pruebas que cubre:

    Renderizado básico de componentes

    Interacciones de usuario simuladas

    Lógica matemática compleja

    Casos límite y manejo de errores

```bash
# Ejecutar todos los tests
npm test
```
### Storybook
Historias interactivas para desarrollo de componentes:
```bash
npm run storybook
```

### Linting
Configuración estricta siguiendo JavaScript Standard Style en el archivo `.eslintrc.json`:
```bash
{
  "rules": {
    "semi": ["error", "never"]
  }
}
```

```bash
# Verificar estilo de código
npm run lint

# Corregir errores automáticamente
npm run lint:fix
```
