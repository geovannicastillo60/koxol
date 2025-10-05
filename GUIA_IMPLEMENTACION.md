# 🌿 K'oxol - Guía de Implementación del Diseño

## 📋 Resumen del Proyecto
- **Marca:** K'oxol - Repelentes Naturales 100% Mexicanos
- **Colores:** Verde #2D5016, Amarillo #F4D03F, Naranja #FF8C42
- **Objetivo:** E-commerce de productos repelentes naturales

## 🎨 Elementos de Diseño que Necesitas Crear en Wix

### 🏠 HOMEPAGE (Página: Inicio)

#### Header (En todas las páginas)
```
Elementos necesarios:
- Logo K'oxol (imagen)
- Menú de navegación:
  * #navInicio - Botón "Inicio"
  * #navProductos - Botón "Productos" 
  * #navNosotros - Botón "Nosotros"
  * #navContacto - Botón "Contacto"
- Iconos del header:
  * #searchButton - Botón de búsqueda 🔍
  * #searchInput - Campo de búsqueda
  * #cartIcon - Ícono del carrito 🛒
  * #cartBadge - Badge con número de productos
```

#### Sección Hero
```
Elementos necesarios:
- #heroVideo - Video de fondo (opcional)
- #videoToggle - Botón play/pause (opcional)
- #videoMute - Botón silenciar (opcional)
- Texto: "Protección Natural Para Tu Familia"
- Subtítulo: "🌿 100% Natural • Hecho en México 🇲🇽"
- #heroMainCTA - Botón "Descubre Nuestros Productos"
- #heroSecondaryCTA - Botón secundario (opcional)
```

#### Categorías de Productos
```
Elementos necesarios:
- #categorySpray - Botón/Card "Sprays"
- #categoryVelas - Botón/Card "Velas" 
- #categoryPulseras - Botón/Card "Pulseras"
- #categoryCremas - Botón/Card "Cremas"
- #categoryAceites - Botón/Card "Aceites Esenciales"

Cada categoría debe tener:
- Imagen/ícono representativo
- Nombre de la categoría
- Efecto hover
```

#### Productos Destacados
```
Elementos necesarios (para 3 productos):
- #featuredProduct1, #featuredProduct2, #featuredProduct3 - Containers
- #featuredProductImg1, #featuredProductImg2, #featuredProductImg3 - Imágenes
- #featuredProductName1, #featuredProductName2, #featuredProductName3 - Nombres
- #featuredProductPrice1, #featuredProductPrice2, #featuredProductPrice3 - Precios
- #addToCart1, #addToCart2, #addToCart3 - Botones "Agregar al carrito"
- #viewMore1, #viewMore2, #viewMore3 - Botones "Ver más"
```

#### Testimonios
```
Elementos necesarios:
- #testimonialsCarousel - Container del carousel
- #testimonialText - Texto del testimonio
- #testimonialAuthor - Nombre del autor
- #testimonialLocation - Ubicación
- #testimonialStars - Estrellas de calificación
- #testimonialPrev - Botón anterior ◀
- #testimonialNext - Botón siguiente ▶
```

#### Footer (En todas las páginas)
```
Elementos necesarios:
- Logo K'oxol
- #newsletterEmail - Campo email newsletter
- #newsletterSubmit - Botón suscribir newsletter
- #newsletterSuccess - Mensaje de éxito (oculto inicialmente)
- Enlaces redes sociales:
  * #facebookLink - Facebook
  * #instagramLink - Instagram  
  * #twitterLink - Twitter
  * #whatsappLink - WhatsApp
- Enlaces legales a políticas
```

### 📞 PÁGINA DE CONTACTO (Página: Contacto)

#### Formulario de Contacto
```
Elementos necesarios:
- #nombre - Campo nombre *obligatorio
- #email - Campo email *obligatorio  
- #telefono - Campo teléfono
- #tipoConsulta - Dropdown con opciones:
  * General
  * Productos  
  * Empresas (B2B)
  * Inversionistas
- #mensaje - Campo mensaje *obligatorio
- #enviarContacto - Botón "Enviar"
- #limpiarFormulario - Botón "Limpiar"

Elementos de validación:
- #nombreError, #emailError, #telefonoError, #mensajeError - Mensajes de error
- #contadorCaracteres - Contador "X/500 caracteres"
- #mensajeFormulario - Mensaje general del formulario
- #loaderFormulario - Indicador de carga
```

#### Información de Contacto
```
Elementos necesarios:
- Información de contacto:
  * Dirección física
  * Teléfono: +52 XXX XXX XXXX
  * Email: contacto@koxol.com
  * Horarios: Lun-Vie 9am-6pm
- #botonLlamar - Botón para llamar
- #botonWhatsApp - Botón WhatsApp
- #botonEmail - Botón email
- #googleMap - Mapa embebido
- #abrirEnMaps - Botón "Abrir en Maps"
```

### 💼 ELEMENTOS GLOBALES (En todas las páginas)

#### Botón Flotante Inversionistas
```
Elemento:
- #investorButton - Botón flotante "💼 Únete a la familia K'oxol"
  * Posición: fixed, bottom: 20px, right: 20px
  * Color de fondo: #2D5016 (verde K'oxol)
  * Animación: pulso cada 5 segundos
```

#### Modal de Inversionistas
```
Elementos del modal/lightbox:
- #investorModal o #investorLightbox - Container del modal
- #investorName - Campo nombre
- #investorEmail - Campo email  
- #investorPhone - Campo teléfono
- #investorMessage - Campo mensaje
- #submitInvestorBtn - Botón "Enviar Solicitud"
- #closeInvestorModal - Botón cerrar "X"
- #investorError - Mensaje de error (oculto)
- #investorSuccess - Mensaje de éxito (oculto)
```

#### Banner de Bienvenida
```
Elementos:
- #welcomeBanner - Banner superior
  * Texto: "🎉 ¡Regístrate y obtén 10% de descuento!"
  * #welcomeSignup - Botón "REGISTRARME AHORA"  
  * #closeWelcome - Botón cerrar "X"
  * Animación: slideInDown al cargar
```

#### Chat Bot
```
Elementos opcionales:
- #chatBot - Botón chat "💬 ¿Necesitas ayuda?"
- #chatBotPrompt - Prompt que aparece automáticamente
```

#### Mensajes del Sistema
```
Elementos opcionales:
- #messageBar - Barra de mensajes globales
- #cartMessage - Mensajes del carrito
```

## 🎨 Configuración de Colores y Estilos

### Paleta de Colores K'oxol
```css
--koxol-verde-principal: #2D5016
--koxol-verde-claro: #6B8E23  
--koxol-amarillo: #F4D03F
--koxol-naranja-cta: #FF8C42
--koxol-texto-oscuro: #2C3E50
--koxol-fondo-claro: #FDFEFE
--koxol-crema: #F5F5DC
```

### Estilos de Botones
```
Botones Principales (CTAs):
- Color de fondo: #FF8C42 (naranja)
- Texto: blanco
- Border-radius: 25px
- Hover: escala 1.05

Botones Secundarios:
- Color de fondo: #2D5016 (verde)
- Texto: blanco  
- Border-radius: 25px

Botones Outline:
- Border: 2px solid #2D5016
- Texto: #2D5016
- Fondo: transparente
```

### Tipografía
```
Títulos:
- Font-family: Montserrat, Poppins (bold)
- Color: #2C3E50

Cuerpo:
- Font-family: Open Sans, Roboto
- Color: #2C3E50

Logo:
- Mantener tipografía original de K'oxol
```

## 🛒 Configuración de Wix Stores

### Productos a Crear
1. **Spray Anti-mosquitos K'oxol 250ml** - $299 MXN
2. **Vela Aromática Repelente** - $199 MXN  
3. **Pulsera Repelente Natural** - $149 MXN
4. **Crema Protectora Familiar** - $249 MXN
5. **Aceite Esencial Citronela** - $179 MXN

### Categorías de Productos
- Sprays
- Velas
- Pulseras  
- Cremas
- Aceites Esenciales

### Configuración del Carrito
- Moneda: MXN (Pesos Mexicanos)
- Envíos: Nacional México
- Métodos de pago: Tarjetas, PayPal, OXXO
- Impuestos: IVA 16%

## 📱 Configuración Responsive

### Desktop (1200px+)
- Header completo con menú horizontal
- Grid de productos: 3-4 columnas
- Botón flotante inversionistas visible

### Tablet (768px - 1199px)  
- Header compacto
- Grid de productos: 2 columnas
- Menú hamburguesa opcional

### Móvil (< 768px)
- Menú hamburguesa obligatorio
- Grid de productos: 1 columna
- Botones más grandes (mín 44px)
- Stack vertical en formularios

## 🎬 Animaciones y Efectos

### Efectos de Entrada
```javascript
// Al cargar página
show("fadeIn", { duration: 600 })

// Al hacer scroll  
onViewportEnter(() => {
    show("fadeIn", { duration: 600 })
})
```

### Hover Effects
```
Productos:
- Hover: zoom 1.05 + mostrar "Vista rápida"

Botones:
- Hover: escala 1.05 + cambio de color

Links:
- Hover: underline + cambio de color
```

## 🔧 Funcionalidades del JavaScript

### Archivo masterPage.js
- ✅ Navegación del sitio
- ✅ Contador del carrito
- ✅ Botón flotante inversionistas  
- ✅ Banner de bienvenida
- ✅ Newsletter signup
- ✅ Enlaces redes sociales

### Archivo Inicio.rmz7o.js
- ✅ Sección hero con video
- ✅ Categorías de productos
- ✅ Productos destacados dinámicos
- ✅ Carousel de testimonios
- ✅ CTAs principales
- ✅ Animaciones de scroll

### Archivo Contacto.hkgik.js
- ✅ Formulario de contacto completo
- ✅ Validación en tiempo real
- ✅ Contador de caracteres
- ✅ Información de contacto
- ✅ Integración con mapa
- ✅ Chat bot

## 🚀 Próximos Pasos

1. **Crear elementos en Wix Designer** usando los IDs especificados
2. **Configurar Wix Stores** con productos y categorías
3. **Añadir contenido** (textos, imágenes, videos)
4. **Configurar colores** según la paleta K'oxol
5. **Configurar responsive** para móvil y tablet  
6. **Probar funcionalidades** en preview
7. **Publicar** el sitio

## 📞 Información de Contacto a Configurar

```
Empresa: K'oxol - Repelentes Naturales
Teléfono: +52 XXX XXX XXXX (actualizar con número real)
Email: contacto@koxol.com
WhatsApp: +52 XXX XXX XXXX (actualizar con número real)
Dirección: [Actualizar con dirección real]
Horarios: Lun-Vie 9am-6pm, Sáb 9am-2pm

Redes Sociales:
- Facebook: https://facebook.com/koxol
- Instagram: https://instagram.com/koxol  
- Twitter: https://twitter.com/koxol
```

---

## ⚠️ Notas Importantes

1. **IDs de elementos:** Usar exactamente los IDs especificados en el JavaScript
2. **Responsive:** Probar en todos los dispositivos
3. **Velocidad:** Optimizar imágenes para web
4. **SEO:** Configurar meta descriptions y títulos
5. **Analytics:** Instalar Google Analytics
6. **Certificado SSL:** Asegurar HTTPS habilitado

¡Listo para crear el sitio web más natural de México! 🌿🇲🇽
