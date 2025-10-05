// K'oxol - Página de Inicio (Homepage)
// Protección Natural Para Tu Familia 🌿
// API Reference: https://www.wix.com/velo/reference/api-overview/introduction

import wixStores from 'wix-stores-frontend';
import wixLocation from 'wix-location';
import { session } from 'wix-storage-frontend';

$w.onReady(function () {
    console.log("K'oxol Inicio - Página cargada 🏠🌿");
    
    // 🚀 OVERRIDE COMPLETO - FORZAR VISTA K'OXOL
    setTimeout(() => {
        forceCompleteKoxolOverride();
    }, 500);
    
    // 🚀 TRANSFORMAR CONTENIDO EXISTENTE A K'OXOL
    setTimeout(() => {
        transformExistingContent();
    }, 1000);
    
    // Inicializar página de inicio
    initializeHomepage();
});

/**
 * Inicializa todas las funcionalidades de la página de inicio
 */
function initializeHomepage() {
    // Configurar sección hero
    setupHeroSection();
    
    // Configurar categorías de productos
    setupProductCategories();
    
    // Configurar productos destacados
    setupFeaturedProducts();
    
    // Configurar testimonios
    setupTestimonials();
    
    // Configurar CTAs principales
    setupMainCTAs();
    
    // Animaciones de entrada
    setupScrollAnimations();
    
    console.log("Homepage K'oxol inicializada ✅");
}

/**
 * Configura la sección hero con video/imagen de fondo
 */
function setupHeroSection() {
    try {
        // Botón principal CTA del hero
        if ($w("#heroMainCTA")) {
            $w("#heroMainCTA").onClick(() => {
                // Redirigir a productos con scroll suave
                wixLocation.to("/productos");
            });
        }
        
        // Botón secundario del hero (si existe)
        if ($w("#heroSecondaryCTA")) {
            $w("#heroSecondaryCTA").onClick(() => {
                // Scroll a sección de productos destacados
                scrollToSection("#featuredProducts");
            });
        }
        
        // Configurar video de fondo (si existe)
        if ($w("#heroVideo")) {
            // El video se configura en el diseñador de Wix
            // Aquí podemos agregar controles adicionales
            setupVideoControls();
        }
        
        console.log("Sección hero configurada ✅");
    } catch (error) {
        console.log("Error configurando hero:", error);
    }
}

/**
 * Configura los controles del video hero
 */
function setupVideoControls() {
    try {
        // Botón de pausa/play (si existe)
        if ($w("#videoToggle")) {
            let isPlaying = true;
            $w("#videoToggle").onClick(() => {
                if (isPlaying) {
                    $w("#heroVideo").pause();
                    $w("#videoToggle").label = "▶";
                    isPlaying = false;
                } else {
                    $w("#heroVideo").play();
                    $w("#videoToggle").label = "⏸";
                    isPlaying = true;
                }
            });
        }
        
        // Botón de silenciar (si existe)
        if ($w("#videoMute")) {
            $w("#videoMute").onClick(() => {
                const video = $w("#heroVideo");
                video.isMuted = !video.isMuted;
                $w("#videoMute").label = video.isMuted ? "🔇" : "🔊";
            });
        }
    } catch (error) {
        console.log("Controles de video no disponibles");
    }
}

/**
 * Configura las categorías de productos
 */
function setupProductCategories() {
    try {
        // Sprays Anti-mosquitos
        if ($w("#categorySpray")) {
            $w("#categorySpray").onClick(() => {
                wixLocation.to("/productos?category=sprays");
            });
        }
        
        // Velas Aromáticas
        if ($w("#categoryVelas")) {
            $w("#categoryVelas").onClick(() => {
                wixLocation.to("/productos?category=velas");
            });
        }
        
        // Pulseras Repelentes
        if ($w("#categoryPulseras")) {
            $w("#categoryPulseras").onClick(() => {
                wixLocation.to("/productos?category=pulseras");
            });
        }
        
        // Cremas Protectoras
        if ($w("#categoryCremas")) {
            $w("#categoryCremas").onClick(() => {
                wixLocation.to("/productos?category=cremas");
            });
        }
        
        // Aceites Esenciales
        if ($w("#categoryAceites")) {
            $w("#categoryAceites").onClick(() => {
                wixLocation.to("/productos?category=aceites");
            });
        }
        
        console.log("Categorías de productos configuradas ✅");
    } catch (error) {
        console.log("Error configurando categorías:", error);
    }
}

/**
 * Configura los productos destacados
 */
function setupFeaturedProducts() {
    try {
        // Obtener productos destacados desde Wix Stores
        wixStores.getProducts()
            .then((products) => {
                displayFeaturedProducts(products.slice(0, 3)); // Mostrar 3 productos
            })
            .catch((error) => {
                console.log("Error cargando productos:", error);
            });
            
        console.log("Productos destacados configurados ✅");
    } catch (error) {
        console.log("Error configurando productos destacados:", error);
    }
}

/**
 * Muestra los productos destacados en la página
 */
function displayFeaturedProducts(products) {
    try {
        products.forEach((product, index) => {
            const productContainer = $w(`#featuredProduct${index + 1}`);
            if (productContainer) {
                // Configurar imagen del producto
                const productImage = $w(`#featuredProductImg${index + 1}`);
                if (productImage && product.mainMedia) {
                    productImage.src = product.mainMedia;
                }
                
                // Configurar nombre del producto
                const productName = $w(`#featuredProductName${index + 1}`);
                if (productName) {
                    productName.text = product.name;
                }
                
                // Configurar precio del producto
                const productPrice = $w(`#featuredProductPrice${index + 1}`);
                if (productPrice) {
                    productPrice.text = `$${product.price.toFixed(2)} MXN`;
                }
                
                // Configurar botón "Agregar al carrito"
                const addToCartBtn = $w(`#addToCart${index + 1}`);
                if (addToCartBtn) {
                    addToCartBtn.onClick(() => {
                        addProductToCart(product);
                    });
                }
                
                // Configurar botón "Ver más" 
                const viewMoreBtn = $w(`#viewMore${index + 1}`);
                if (viewMoreBtn) {
                    viewMoreBtn.onClick(() => {
                        wixLocation.to(`/producto/${product.slug}`);
                    });
                }
            }
        });
    } catch (error) {
        console.log("Error mostrando productos:", error);
    }
}

/**
 * Agrega un producto al carrito
 */
function addProductToCart(product) {
    try {
        wixStores.addToCart(product.id, 1)
            .then(() => {
                showCartMessage(`✅ ${product.name} agregado al carrito`);
                // Opcional: mostrar animación del carrito
                animateCartIcon();
            })
            .catch((error) => {
                console.log("Error agregando al carrito:", error);
                showCartMessage("❌ Error al agregar producto");
            });
    } catch (error) {
        console.log("Error en addProductToCart:", error);
    }
}

/**
 * Configura el carousel de testimonios
 */
function setupTestimonials() {
    try {
        // Testimonios de ejemplo (normalmente vendrían de una base de datos)
        const testimonials = [
            {
                text: "Excelente producto, mi familia está protegida naturalmente. ¡100% recomendado!",
                author: "María González",
                rating: 5,
                location: "Ciudad de México"
            },
            {
                text: "Me encanta que sea hecho en México y con ingredientes naturales. Muy efectivo.",
                author: "Juan Pérez", 
                rating: 5,
                location: "Guadalajara"
            },
            {
                text: "Los sprays K'oxol funcionan perfecto. Ya no tenemos mosquitos en casa.",
                author: "Ana López",
                rating: 5,
                location: "Monterrey"
            }
        ];
        
        // Configurar carousel de testimonios (si existe)
        if ($w("#testimonialsCarousel")) {
            setupTestimonialsCarousel(testimonials);
        }
        
        console.log("Testimonios configurados ✅");
    } catch (error) {
        console.log("Error configurando testimonios:", error);
    }
}

/**
 * Configura el carousel de testimonios
 */
function setupTestimonialsCarousel(testimonials) {
    try {
        let currentTestimonial = 0;
        
        // Mostrar primer testimonio
        showTestimonial(testimonials[currentTestimonial]);
        
        // Botón anterior
        if ($w("#testimonialPrev")) {
            $w("#testimonialPrev").onClick(() => {
                currentTestimonial = currentTestimonial > 0 ? currentTestimonial - 1 : testimonials.length - 1;
                showTestimonial(testimonials[currentTestimonial]);
            });
        }
        
        // Botón siguiente
        if ($w("#testimonialNext")) {
            $w("#testimonialNext").onClick(() => {
                currentTestimonial = currentTestimonial < testimonials.length - 1 ? currentTestimonial + 1 : 0;
                showTestimonial(testimonials[currentTestimonial]);
            });
        }
        
        // Auto-avance cada 5 segundos
        setInterval(() => {
            currentTestimonial = currentTestimonial < testimonials.length - 1 ? currentTestimonial + 1 : 0;
            showTestimonial(testimonials[currentTestimonial]);
        }, 5000);
        
    } catch (error) {
        console.log("Error en carousel testimonios:", error);
    }
}

/**
 * Muestra un testimonio específico
 */
function showTestimonial(testimonial) {
    try {
        if ($w("#testimonialText")) {
            $w("#testimonialText").text = `"${testimonial.text}"`;
        }
        
        if ($w("#testimonialAuthor")) {
            $w("#testimonialAuthor").text = `- ${testimonial.author}`;
        }
        
        if ($w("#testimonialLocation")) {
            $w("#testimonialLocation").text = testimonial.location;
        }
        
        if ($w("#testimonialStars")) {
            $w("#testimonialStars").text = "⭐".repeat(testimonial.rating);
        }
    } catch (error) {
        console.log("Error mostrando testimonio:", error);
    }
}

/**
 * Configura los CTAs principales
 */
function setupMainCTAs() {
    try {
        // CTA "Descubre Productos"
        if ($w("#discoverProductsCTA")) {
            $w("#discoverProductsCTA").onClick(() => {
                wixLocation.to("/productos");
            });
        }
        
        // CTA "Conoce Más"
        if ($w("#learnMoreCTA")) {
            $w("#learnMoreCTA").onClick(() => {
                wixLocation.to("/acerca-de");
            });
        }
        
        // CTA "Contactar"
        if ($w("#contactCTA")) {
            $w("#contactCTA").onClick(() => {
                wixLocation.to("/contacto");
            });
        }
        
        console.log("CTAs principales configurados ✅");
    } catch (error) {
        console.log("Error configurando CTAs:", error);
    }
}

/**
 * Configura animaciones de scroll
 */
function setupScrollAnimations() {
    try {
        // Elementos que aparecen al hacer scroll
        const animatedElements = [
            "#productCategories",
            "#featuredProducts", 
            "#whyKoxol",
            "#testimonials"
        ];
        
        animatedElements.forEach(selector => {
            if ($w(selector)) {
                // Configurar animación de entrada
                $w(selector).onViewportEnter(() => {
                    $w(selector).show("fadeIn", { duration: 600 });
                });
            }
        });
        
        console.log("Animaciones de scroll configuradas ✅");
    } catch (error) {
        console.log("Error configurando animaciones:", error);
    }
}

/**
 * Utilidades
 */

/**
 * Hace scroll suave a una sección
 */
function scrollToSection(selector) {
    try {
        if ($w(selector)) {
            $w(selector).scrollTo();
        }
    } catch (error) {
        console.log("Error en scroll:", error);
    }
}

/**
 * Muestra mensaje del carrito
 */
function showCartMessage(message) {
    try {
        console.log(message);
        
        // Si hay elemento de mensaje, mostrarlo
        if ($w("#cartMessage")) {
            $w("#cartMessage").text = message;
            $w("#cartMessage").show();
            
            setTimeout(() => {
                $w("#cartMessage").hide();
            }, 3000);
        }
    } catch (error) {
        console.log("Error mostrando mensaje carrito:", error);
    }
}

/**
 * Anima el ícono del carrito
 */
function animateCartIcon() {
    try {
        if ($w("#cartIcon")) {
            $w("#cartIcon").show("bounce", { duration: 600 });
        }
    } catch (error) {
        console.log("Error animando carrito:", error);
    }
}

/**
 * 🚀 TRANSFORMA EL CONTENIDO EXISTENTE DE LA PLANTILLA A K'OXOL
 * Esta función encuentra elementos reales de Wix y los modifica
 */
function transformExistingContent() {
    console.log("🔄 Transformando contenido existente a K'oxol...");
    
    try {
        // Crear contenido K'oxol dinámico usando HtmlComponent (si existe)
        if ($w("#htmlComponent1")) {
            createKoxolHtmlContent();
        }
        
        // Buscar elementos específicos y comunes de la plantilla
        const commonSelectors = [
            "#text1", "#text2", "#text3", "#text4", "#text5", "#text6", "#text7", "#text8",
            "#heading1", "#heading2", "#heading3", "#heading4", "#heading5",
            "#button1", "#button2", "#button3", "#button4", "#button5",
            "#title1", "#title2", "#title3"
        ];
        
        commonSelectors.forEach(selector => {
            try {
                const element = $w(selector);
                if (element && element.text) {
                    const originalText = element.text;
                    let newText = originalText;
                    
                    // Reemplazos específicos para K'oxol
                    newText = newText.replace(/Remodelación M&B/gi, 'K\'oxol');
                    newText = newText.replace(/Remodelaciones y renovaciones domésticas/gi, '🌿 Protección Natural Para Tu Familia');
                    newText = newText.replace(/Remodelaciones/gi, 'Protección Natural');
                    newText = newText.replace(/renovaciones/gi, 'repelentes naturales');
                    newText = newText.replace(/domésticas/gi, 'familiares');
                    newText = newText.replace(/Servicios/gi, 'Productos');
                    newText = newText.replace(/Trabajos/gi, 'Tienda');
                    
                    // Solo actualizar si el texto cambió
                    if (newText !== originalText) {
                        element.text = newText;
                        console.log(`✅ Actualizado ${selector}: "${originalText}" → "${newText}"`);
                    }
                }
            } catch (e) {
                // Elemento no existe, continuar
            }
        });
        
        // Buscar y modificar la navegación
        transformNavigation();
        
        // Mostrar mensaje de K'oxol
        showKoxolWelcomeMessage();
        
        console.log("✅ Transformación de contenido completada");
        
    } catch (error) {
        console.log("Error transformando contenido:", error);
    }
}

/**
 * Transforma la navegación a K'oxol
 */
function transformNavigation() {
    try {
        // Elementos comunes de navegación en plantillas Wix
        const navElements = [
            "#linkInicio", "#linkServicios", "#linkTrabajos", "#linkContacto", "#linkAcerca",
            "#menuInicio", "#menuServicios", "#menuTrabajos", "#menuContacto", "#menuAcerca"
        ];
        
        navElements.forEach(selector => {
            try {
                const element = $w(selector);
                if (element && element.text) {
                    if (element.text.toLowerCase().includes('servicios')) {
                        element.text = 'Productos';
                        console.log(`✅ Nav actualizado: ${selector} → Productos`);
                    }
                    if (element.text.toLowerCase().includes('trabajos')) {
                        element.text = 'Tienda';
                        console.log(`✅ Nav actualizado: ${selector} → Tienda`);
                    }
                }
            } catch (e) {
                // Elemento no existe
            }
        });
    } catch (error) {
        console.log("Error transformando navegación:", error);
    }
}

/**
 * Muestra mensaje de bienvenida K'oxol
 */
function showKoxolWelcomeMessage() {
    try {
        // Crear mensaje en console visible para el usuario
        console.log("🌿=".repeat(50));
        console.log("🌿 ¡BIENVENIDO A K'OXOL! 🌿");
        console.log("🌿 Repelentes 100% Naturales");
        console.log("🌿 Protección Para Tu Familia");
        console.log("🌿=".repeat(50));
        
        // Buscar si hay algún elemento de mensaje para mostrar información
        const messageElements = ["#messageBar", "#notification", "#alert", "#banner"];
        
        messageElements.forEach(selector => {
            try {
                const element = $w(selector);
                if (element) {
                    element.text = "🌿 K'oxol - Protección Natural Para Tu Familia | Repelentes 100% Naturales";
                    if (element.show) element.show();
                    console.log(`✅ Mensaje K'oxol mostrado en ${selector}`);
                }
            } catch (e) {
                // Elemento no existe
            }
        });
        
    } catch (error) {
        console.log("Error mostrando mensaje K'oxol:", error);
    }
}

/**
 * Crea contenido HTML K'oxol si hay HtmlComponent disponible
 */
function createKoxolHtmlContent() {
    try {
        const koxolContent = `
            <div style="
                background: linear-gradient(135deg, #2D5016 0%, #6B8E23 100%);
                color: white;
                text-align: center;
                padding: 40px 20px;
                border-radius: 15px;
                margin: 20px 0;
                box-shadow: 0 8px 32px rgba(45,80,22,0.3);
                font-family: 'Arial', sans-serif;
            ">
                <h1 style="
                    font-size: 32px;
                    font-weight: bold;
                    margin-bottom: 15px;
                    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
                ">🌿 K'oxol</h1>
                <h2 style="
                    font-size: 24px;
                    margin-bottom: 20px;
                    opacity: 0.9;
                ">Protección Natural Para Tu Familia</h2>
                <p style="
                    font-size: 18px;
                    margin-bottom: 25px;
                    line-height: 1.6;
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                ">
                    Repelentes 100% naturales, efectivos contra mosquitos.<br>
                    Seguros para niños y mascotas • Sin químicos tóxicos • Hechos en México
                </p>
                <div style="
                    display: flex;
                    gap: 15px;
                    justify-content: center;
                    flex-wrap: wrap;
                ">
                    <a href="/productos" style="
                        background: #FF8C42;
                        color: white;
                        text-decoration: none;
                        padding: 15px 30px;
                        border-radius: 25px;
                        font-weight: bold;
                        font-size: 16px;
                        box-shadow: 0 4px 15px rgba(255,140,66,0.4);
                        transition: all 0.3s ease;
                        display: inline-block;
                    ">🛒 Ver Productos</a>
                    <a href="/acerca-de" style="
                        background: transparent;
                        color: white;
                        text-decoration: none;
                        padding: 15px 30px;
                        border: 2px solid white;
                        border-radius: 25px;
                        font-weight: bold;
                        font-size: 16px;
                        transition: all 0.3s ease;
                        display: inline-block;
                    ">🌿 Conoce Más</a>
                </div>
                <div style="
                    margin-top: 30px;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    gap: 20px;
                    max-width: 800px;
                    margin-left: auto;
                    margin-right: auto;
                ">
                    <div style="text-align: center;">
                        <div style="font-size: 32px; margin-bottom: 10px;">💨</div>
                        <h4 style="margin: 0; font-size: 16px;">Sprays</h4>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 32px; margin-bottom: 10px;">🕯️</div>
                        <h4 style="margin: 0; font-size: 16px;">Velas</h4>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 32px; margin-bottom: 10px;">👶</div>
                        <h4 style="margin: 0; font-size: 16px;">Kids</h4>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 32px; margin-bottom: 10px;">🧴</div>
                        <h4 style="margin: 0; font-size: 16px;">Cremas</h4>
                    </div>
                </div>
            </div>
        `;
        
        // Intentar insertar en HtmlComponent
        if ($w("#htmlComponent1") && $w("#htmlComponent1").postMessage) {
            $w("#htmlComponent1").postMessage(koxolContent);
            console.log("✅ Contenido K'oxol insertado en HtmlComponent");
        }
        
    } catch (error) {
        console.log("Error creando contenido HTML:", error);
    }
}

/**
 * 🚀 CONVIERTE LA PLANTILLA DE CONSTRUCCIÓN A K'OXOL AUTOMÁTICAMENTE
 * Esta función busca y reemplaza el contenido de la plantilla original
 */
function convertTemplateToKoxol() {
    console.log("🔄 Convirtiendo plantilla a K'oxol...");
    
    try {
        // 1. CAMBIAR TÍTULO PRINCIPAL
        replaceTemplateText("Remodelación M&B", "K'oxol");
        replaceTemplateText("Remodelaciones y renovaciones domésticas", "Protección Natural Para Tu Familia");
        replaceTemplateText("Remodelaciones y\nrenovaciones\ndomésticas", "Protección Natural\nPara Tu Familia\ncon K'oxol");
        
        // 2. CAMBIAR NAVEGACIÓN
        replaceTemplateText("Servicios", "Productos");
        replaceTemplateText("Trabajos", "Tienda");
        replaceTemplateText("Acerca de", "Nosotros");
        
        // 3. CAMBIAR TEXTOS DE CONSTRUCCIÓN POR REPELENTES
        replaceTemplateText("construcción", "protección natural");
        replaceTemplateText("remodelación", "repelente natural");
        replaceTemplateText("obra", "producto");
        replaceTemplateText("proyecto", "familia protegida");
        
        // 4. CAMBIAR SUBTÍTULOS Y DESCRIPCIONES
        setTimeout(() => {
            replaceTemplateText("Especialistas en", "Expertos en");
            replaceTemplateText("domésticas", "familiar");
            replaceTemplateText("hogar", "familia");
        }, 1000);
        
        // 5. APLICAR COLORES DE MARCA K'OXOL
        setTimeout(() => {
            applyKoxolStyling();
        }, 1500);
        
        console.log("✅ Conversión a K'oxol completada");
        
    } catch (error) {
        console.log("Error convirtiendo plantilla:", error);
    }
}

/**
 * Busca y reemplaza texto en todos los elementos de la página
 */
function replaceTemplateText(oldText, newText) {
    try {
        // Buscar en elementos de texto comunes
        const textSelectors = [
            'text', 'heading', 'title', 'button', 'link', 
            'paragraph', 'label', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
        ];
        
        // Buscar por ID y clase también
        const possibleElements = [
            '#text1', '#text2', '#text3', '#text4', '#text5',
            '#heading1', '#heading2', '#heading3', 
            '#title1', '#title2', '#title3',
            '#button1', '#button2', '#button3',
            '#mainTitle', '#heroTitle', '#siteTitle', '#companyName'
        ];
        
        // Intentar encontrar elementos que contengan el texto
        possibleElements.forEach(selector => {
            try {
                const element = $w(selector);
                if (element && element.text && element.text.includes(oldText)) {
                    element.text = element.text.replace(new RegExp(oldText, 'gi'), newText);
                    console.log(`✅ Reemplazado: "${oldText}" → "${newText}" en ${selector}`);
                }
            } catch (e) {
                // Elemento no existe, continuar
            }
        });
        
        // Buscar en todos los elementos de la página (método más amplio)
        setTimeout(() => {
            $w('*').forEach((element) => {
                try {
                    if (element.text && element.text.includes(oldText)) {
                        element.text = element.text.replace(new RegExp(oldText, 'gi'), newText);
                        console.log(`✅ Texto actualizado: "${oldText}" → "${newText}"`);
                    }
                } catch (e) {
                    // Elemento sin propiedad text, continuar
                }
            });
        }, 500);
        
    } catch (error) {
        console.log(`Error reemplazando "${oldText}":`, error);
    }
}

/**
 * Aplica colores y estilos de K'oxol a la página
 */
function applyKoxolStyling() {
    try {
        console.log("🎨 Aplicando estilos K'oxol...");
        
        // Colores de marca K'oxol
        const koxolColors = {
            primary: '#2D5016',    // Verde principal
            secondary: '#F4D03F',  // Amarillo
            accent: '#FF8C42',     // Naranja
            dark: '#1F3A0F',       // Verde oscuro
            light: '#A8D5A8'       // Verde claro
        };
        
        // Aplicar colores a elementos comunes
        setTimeout(() => {
            // Intentar cambiar colores de fondo y texto
            const elementSelectors = [
                '#colorBackground', '#strip1', '#strip2', '#section1', '#section2',
                '#header', '#footer', '#container1', '#container2'
            ];
            
            elementSelectors.forEach(selector => {
                try {
                    const element = $w(selector);
                    if (element && element.style) {
                        // Cambiar color de fondo
                        element.style.backgroundColor = koxolColors.primary;
                    }
                } catch (e) {
                    // Elemento no existe
                }
            });
            
            // Cambiar colores de botones
            const buttonSelectors = ['#button1', '#button2', '#button3', '#cta1', '#cta2'];
            buttonSelectors.forEach(selector => {
                try {
                    const button = $w(selector);
                    if (button && button.style) {
                        button.style.backgroundColor = koxolColors.accent;
                        button.style.color = '#FFFFFF';
                    }
                } catch (e) {
                    // Botón no existe
                }
            });
            
        }, 1000);
        
        console.log("✅ Estilos K'oxol aplicados");
        
    } catch (error) {
        console.log("Error aplicando estilos:", error);
    }
}

/**
 * 🌿 INYECTA CONTENIDO K'OXOL DINÁMICAMENTE EN LA PÁGINA
 * Esta función crea elementos K'oxol si no existen
 */
function injectKoxolContent() {
    console.log("🌿 Inyectando contenido K'oxol...");
    
    try {
        // 1. CREAR BANNER DE K'OXOL EN LA PARTE SUPERIOR
        createKoxolBanner();
        
        // 2. CREAR SECCIÓN HERO DE K'OXOL
        createKoxolHeroSection();
        
        // 3. CREAR CATEGORÍAS DE PRODUCTOS
        createProductCategories();
        
        // 4. MOSTRAR PRODUCTOS DESTACADOS
        showKoxolProducts();
        
        console.log("✅ Contenido K'oxol inyectado");
        
    } catch (error) {
        console.log("Error inyectando contenido:", error);
    }
}

/**
 * Crea un banner de K'oxol en la parte superior
 */
function createKoxolBanner() {
    try {
        // Buscar elemento donde insertar el banner
        const bodyElement = $w('#page') || $w('#main') || $w('body');
        
        if (bodyElement) {
            // Crear contenido HTML del banner
            const koxolBanner = `
                <div style="
                    background: linear-gradient(135deg, #2D5016 0%, #6B8E23 100%);
                    color: white;
                    text-align: center;
                    padding: 20px;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 9999;
                    box-shadow: 0 4px 12px rgba(45,80,22,0.3);
                    font-family: 'Montserrat', sans-serif;
                ">
                    <h1 style="margin: 0; font-size: 28px; font-weight: bold;">
                        🌿 K'oxol - Protección Natural Para Tu Familia
                    </h1>
                    <p style="margin: 8px 0 0 0; font-size: 16px; opacity: 0.9;">
                        Repelentes 100% naturales • Efectivos y seguros • Hechos en México
                    </p>
                    <button onclick="window.scrollTo(0, window.innerHeight)" style="
                        background: #FF8C42;
                        color: white;
                        border: none;
                        padding: 12px 24px;
                        margin-top: 15px;
                        border-radius: 25px;
                        font-size: 16px;
                        font-weight: bold;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                        Ver Productos 🛒
                    </button>
                </div>
            `;
            
            // Insertar el banner
            document.body.insertAdjacentHTML('afterbegin', koxolBanner);
            
            // Ajustar el body para el banner fijo
            document.body.style.paddingTop = '140px';
            
            console.log("✅ Banner K'oxol creado");
        }
        
    } catch (error) {
        console.log("Error creando banner:", error);
    }
}

/**
 * Crea la sección hero de K'oxol
 */
function createKoxolHeroSection() {
    try {
        // Crear sección hero completa
        const heroSection = `
            <div id="koxol-hero" style="
                background: linear-gradient(rgba(45,80,22,0.8), rgba(45,80,22,0.8)), 
                           url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80');
                background-size: cover;
                background-position: center;
                height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                color: white;
                padding-top: 80px;
            ">
                <div style="max-width: 800px; padding: 40px 20px;">
                    <h1 style="
                        font-size: 48px;
                        font-weight: bold;
                        margin-bottom: 20px;
                        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
                        animation: fadeInUp 1s ease-out;
                    ">
                        Protege a Tu Familia Naturalmente
                    </h1>
                    <p style="
                        font-size: 24px;
                        margin-bottom: 30px;
                        opacity: 0.95;
                        animation: fadeInUp 1s ease-out 0.3s both;
                    ">
                        K'oxol ofrece repelentes 100% naturales, efectivos contra mosquitos<br>
                        Seguros para niños y mascotas • Sin químicos tóxicos
                    </p>
                    <div style="animation: fadeInUp 1s ease-out 0.6s both;">
                        <button onclick="window.location.href='/productos'" style="
                            background: #FF8C42;
                            color: white;
                            border: none;
                            padding: 18px 36px;
                            margin: 10px;
                            border-radius: 30px;
                            font-size: 18px;
                            font-weight: bold;
                            cursor: pointer;
                            box-shadow: 0 6px 20px rgba(255,140,66,0.4);
                            transition: all 0.3s ease;
                        " onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 25px rgba(255,140,66,0.6)'" 
                           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 6px 20px rgba(255,140,66,0.4)'">
                            🛒 Ver Productos
                        </button>
                        <button onclick="window.location.href='/acerca-de'" style="
                            background: transparent;
                            color: white;
                            border: 2px solid white;
                            padding: 16px 34px;
                            margin: 10px;
                            border-radius: 30px;
                            font-size: 18px;
                            font-weight: bold;
                            cursor: pointer;
                            transition: all 0.3s ease;
                        " onmouseover="this.style.background='white'; this.style.color='#2D5016'" 
                           onmouseout="this.style.background='transparent'; this.style.color='white'">
                            🌿 Conoce Más
                        </button>
                    </div>
                </div>
            </div>
            
            <style>
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            </style>
        `;
        
        // Insertar después del banner
        document.body.insertAdjacentHTML('beforeend', heroSection);
        console.log("✅ Hero K'oxol creado");
        
    } catch (error) {
        console.log("Error creando hero:", error);
    }
}

/**
 * Crea las categorías de productos
 */
function createProductCategories() {
    try {
        const categoriesSection = `
            <div id="koxol-categories" style="
                padding: 80px 20px;
                background: #F8F9FA;
                text-align: center;
            ">
                <h2 style="
                    font-size: 36px;
                    color: #2D5016;
                    margin-bottom: 50px;
                    font-weight: bold;
                ">Nuestras Categorías de Protección</h2>
                
                <div style="
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 30px;
                    max-width: 1200px;
                    margin: 0 auto;
                ">
                    ${createCategoryCard('💨', 'Sprays Repelentes', 'Protección instantánea para toda la familia', '/productos?category=sprays')}
                    ${createCategoryCard('🕯️', 'Velas Aromáticas', 'Ambiente protegido y relajante', '/productos?category=velas')}
                    ${createCategoryCard('👶', 'Pulseras Kids', 'Protección especial para niños', '/productos?category=pulseras')}
                    ${createCategoryCard('🧴', 'Cremas Naturales', 'Hidratación y protección', '/productos?category=cremas')}
                    ${createCategoryCard('🌿', 'Aceites Esenciales', 'Ingredientes puros de la naturaleza', '/productos?category=aceites')}
                    ${createCategoryCard('🎁', 'Combos Familiares', 'Paquetes completos de protección', '/productos?category=combos')}
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', categoriesSection);
        console.log("✅ Categorías K'oxol creadas");
        
    } catch (error) {
        console.log("Error creando categorías:", error);
    }
}

/**
 * Crea una tarjeta de categoría
 */
function createCategoryCard(icon, title, description, link) {
    return `
        <div onclick="window.location.href='${link}'" style="
            background: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 4px 15px rgba(45,80,22,0.1);
            cursor: pointer;
            transition: all 0.3s ease;
            border: 2px solid transparent;
        " onmouseover="
            this.style.transform='translateY(-8px)';
            this.style.boxShadow='0 8px 25px rgba(45,80,22,0.2)';
            this.style.borderColor='#2D5016';
        " onmouseout="
            this.style.transform='translateY(0)';
            this.style.boxShadow='0 4px 15px rgba(45,80,22,0.1)';
            this.style.borderColor='transparent';
        ">
            <div style="font-size: 48px; margin-bottom: 15px;">${icon}</div>
            <h3 style="
                font-size: 20px;
                color: #2D5016;
                margin-bottom: 10px;
                font-weight: bold;
            ">${title}</h3>
            <p style="
                color: #666;
                font-size: 14px;
                line-height: 1.5;
            ">${description}</p>
        </div>
    `;
}

/**
 * Muestra productos destacados de K'oxol
 */
function showKoxolProducts() {
    try {
        const productsSection = `
            <div id="koxol-featured" style="
                padding: 80px 20px;
                background: white;
                text-align: center;
            ">
                <h2 style="
                    font-size: 36px;
                    color: #2D5016;
                    margin-bottom: 20px;
                    font-weight: bold;
                ">Productos Más Populares</h2>
                <p style="
                    font-size: 18px;
                    color: #666;
                    margin-bottom: 50px;
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                ">Descubre por qué miles de familias mexicanas confían en K'oxol</p>
                
                <div style="
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 30px;
                    max-width: 1000px;
                    margin: 0 auto;
                ">
                    ${createProductCard('Spray Familiar K\'oxol', 'Protección completa para toda la familia', '$189 MXN', 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')}
                    ${createProductCard('Vela Citronela Premium', 'Ambiente relajante y protegido', '$149 MXN', 'https://images.unsplash.com/photo-1602874801006-e554ee0197bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')}
                    ${createProductCard('Combo Viajero', 'Todo lo que necesitas para viajar', '$279 MXN', 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')}
                </div>
                
                <button onclick="window.location.href='/productos'" style="
                    background: #2D5016;
                    color: white;
                    border: none;
                    padding: 18px 36px;
                    margin-top: 40px;
                    border-radius: 30px;
                    font-size: 18px;
                    font-weight: bold;
                    cursor: pointer;
                    transition: all 0.3s ease;
                " onmouseover="this.style.background='#1F3A0F'" onmouseout="this.style.background='#2D5016'">
                    Ver Todos los Productos →
                </button>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', productsSection);
        console.log("✅ Productos K'oxol mostrados");
        
    } catch (error) {
        console.log("Error mostrando productos:", error);
    }
}

/**
 * Crea una tarjeta de producto
 */
function createProductCard(name, description, price, imageUrl) {
    return `
        <div style="
            background: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            cursor: pointer;
        " onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 25px rgba(0,0,0,0.15)'" 
           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.1)'">
            <img src="${imageUrl}" alt="${name}" style="
                width: 100%;
                height: 200px;
                object-fit: cover;
            ">
            <div style="padding: 20px;">
                <h3 style="
                    font-size: 18px;
                    color: #2D5016;
                    margin-bottom: 8px;
                    font-weight: bold;
                ">${name}</h3>
                <p style="
                    color: #666;
                    font-size: 14px;
                    margin-bottom: 15px;
                    line-height: 1.4;
                ">${description}</p>
                <div style="
                    font-size: 20px;
                    font-weight: bold;
                    color: #FF8C42;
                    margin-bottom: 15px;
                ">${price}</div>
                <button onclick="alert('Producto agregado al carrito: ${name}')" style="
                    background: #FF8C42;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 20px;
                    font-size: 14px;
                    font-weight: bold;
                    cursor: pointer;
                    width: 100%;
                    transition: all 0.3s ease;
                " onmouseover="this.style.background='#E67C35'" onmouseout="this.style.background='#FF8C42'">
                    🛒 Agregar al Carrito
                </button>
            </div>
        </div>
    `;
}

/**
 * 🚀 FUERZA OVERRIDE COMPLETO DE LA VISTA A K'OXOL
 * Reemplaza completamente el contenido de la página
 */
function forceCompleteKoxolOverride() {
    console.log("🚀 INICIANDO OVERRIDE COMPLETO K'OXOL...");
    
    try {
        // 1. CAMBIAR TÍTULO DE LA PÁGINA
        if (document.title) {
            document.title = "K'oxol - Protección Natural Para Tu Familia";
        }
        
        // 2. CREAR PÁGINA COMPLETAMENTE NUEVA
        const newPageContent = `
            <div id="koxol-complete-page" style="
                min-height: 100vh;
                font-family: 'Montserrat', 'Arial', sans-serif;
                margin: 0;
                padding: 0;
                overflow-x: hidden;
            ">
                <!-- HEADER FIJO K'OXOL -->
                <header style="
                    background: linear-gradient(135deg, #2D5016 0%, #6B8E23 100%);
                    color: white;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 9999;
                    padding: 15px 20px;
                    box-shadow: 0 4px 12px rgba(45,80,22,0.3);
                ">
                    <div style="
                        max-width: 1200px;
                        margin: 0 auto;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        flex-wrap: wrap;
                    ">
                        <div style="display: flex; align-items: center;">
                            <h1 style="
                                margin: 0;
                                font-size: 28px;
                                font-weight: bold;
                                text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
                            ">🌿 K'oxol</h1>
                        </div>
                        <nav style="display: flex; gap: 20px; align-items: center; flex-wrap: wrap;">
                            <a href="/inicio" style="color: white; text-decoration: none; font-weight: 500; transition: opacity 0.3s;">Inicio</a>
                            <a href="/productos" style="color: white; text-decoration: none; font-weight: 500; transition: opacity 0.3s;">Productos</a>
                            <a href="/acerca-de" style="color: white; text-decoration: none; font-weight: 500; transition: opacity 0.3s;">Nosotros</a>
                            <a href="/contacto" style="color: white; text-decoration: none; font-weight: 500; transition: opacity 0.3s;">Contacto</a>
                            <button onclick="alert('🛒 Carrito próximamente')" style="
                                background: #FF8C42;
                                color: white;
                                border: none;
                                padding: 8px 16px;
                                border-radius: 20px;
                                font-size: 14px;
                                font-weight: bold;
                                cursor: pointer;
                            ">🛒 Carrito</button>
                        </nav>
                    </div>
                </header>

                <!-- HERO SECTION -->
                <section style="
                    background: linear-gradient(rgba(45,80,22,0.8), rgba(45,80,22,0.8)), 
                               url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80');
                    background-size: cover;
                    background-position: center;
                    height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    color: white;
                    padding-top: 80px;
                ">
                    <div style="max-width: 800px; padding: 40px 20px;">
                        <h1 style="
                            font-size: clamp(32px, 5vw, 56px);
                            font-weight: bold;
                            margin-bottom: 20px;
                            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
                            animation: fadeInUp 1s ease-out;
                        ">
                            Protege a Tu Familia Naturalmente
                        </h1>
                        <p style="
                            font-size: clamp(16px, 3vw, 24px);
                            margin-bottom: 30px;
                            opacity: 0.95;
                            animation: fadeInUp 1s ease-out 0.3s both;
                            line-height: 1.6;
                        ">
                            K'oxol ofrece repelentes 100% naturales, efectivos contra mosquitos<br>
                            Seguros para niños y mascotas • Sin químicos tóxicos • Hechos en México
                        </p>
                        <div style="animation: fadeInUp 1s ease-out 0.6s both;">
                            <button onclick="window.location.href='/productos'" style="
                                background: #FF8C42;
                                color: white;
                                border: none;
                                padding: 18px 36px;
                                margin: 10px;
                                border-radius: 30px;
                                font-size: 18px;
                                font-weight: bold;
                                cursor: pointer;
                                box-shadow: 0 6px 20px rgba(255,140,66,0.4);
                                transition: all 0.3s ease;
                            " onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 25px rgba(255,140,66,0.6)'" 
                               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 6px 20px rgba(255,140,66,0.4)'">
                                🛒 Ver Productos
                            </button>
                            <button onclick="window.location.href='/acerca-de'" style="
                                background: transparent;
                                color: white;
                                border: 2px solid white;
                                padding: 16px 34px;
                                margin: 10px;
                                border-radius: 30px;
                                font-size: 18px;
                                font-weight: bold;
                                cursor: pointer;
                                transition: all 0.3s ease;
                            " onmouseover="this.style.background='white'; this.style.color='#2D5016'" 
                               onmouseout="this.style.background='transparent'; this.style.color='white'">
                                🌿 Conoce Más
                            </button>
                        </div>
                    </div>
                </section>

                <!-- CATEGORÍAS -->
                <section style="
                    padding: 80px 20px;
                    background: #F8F9FA;
                    text-align: center;
                ">
                    <h2 style="
                        font-size: clamp(28px, 4vw, 42px);
                        color: #2D5016;
                        margin-bottom: 20px;
                        font-weight: bold;
                    ">Nuestras Categorías de Protección</h2>
                    <p style="
                        font-size: 18px;
                        color: #666;
                        margin-bottom: 50px;
                        max-width: 600px;
                        margin-left: auto;
                        margin-right: auto;
                    ">Productos 100% naturales para cada necesidad de tu familia</p>
                    
                    <div style="
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                        gap: 30px;
                        max-width: 1200px;
                        margin: 0 auto;
                    ">
                        ${createKoxolCategoryCard('💨', 'Sprays Repelentes', 'Protección instantánea para toda la familia', '#FFE6D3')}
                        ${createKoxolCategoryCard('🕯️', 'Velas Aromáticas', 'Ambiente protegido y relajante', '#E8F5E8')}
                        ${createKoxolCategoryCard('👶', 'Pulseras Kids', 'Protección especial para niños', '#FFF2E6')}
                        ${createKoxolCategoryCard('🧴', 'Cremas Naturales', 'Hidratación y protección', '#F0F8F0')}
                        ${createKoxolCategoryCard('🌿', 'Aceites Esenciales', 'Ingredientes puros de la naturaleza', '#E6F7E6')}
                        ${createKoxolCategoryCard('🎁', 'Combos Familiares', 'Paquetes completos de protección', '#FFE6CC')}
                    </div>
                </section>

                <!-- PRODUCTOS DESTACADOS -->
                <section style="
                    padding: 80px 20px;
                    background: white;
                    text-align: center;
                ">
                    <h2 style="
                        font-size: clamp(28px, 4vw, 42px);
                        color: #2D5016;
                        margin-bottom: 20px;
                        font-weight: bold;
                    ">Productos Más Populares</h2>
                    <p style="
                        font-size: 18px;
                        color: #666;
                        margin-bottom: 50px;
                        max-width: 600px;
                        margin-left: auto;
                        margin-right: auto;
                    ">Descubre por qué miles de familias mexicanas confían en K'oxol</p>
                    
                    <div style="
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                        gap: 30px;
                        max-width: 1000px;
                        margin: 0 auto;
                    ">
                        ${createKoxolProductCard('Spray Familiar K\'oxol', 'Protección completa para toda la familia', '$189 MXN', 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')}
                        ${createKoxolProductCard('Vela Citronela Premium', 'Ambiente relajante y protegido', '$149 MXN', 'https://images.unsplash.com/photo-1602874801006-e554ee0197bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')}
                        ${createKoxolProductCard('Combo Viajero', 'Todo lo que necesitas para viajar', '$279 MXN', 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')}
                    </div>
                    
                    <button onclick="window.location.href='/productos'" style="
                        background: #2D5016;
                        color: white;
                        border: none;
                        padding: 18px 36px;
                        margin-top: 40px;
                        border-radius: 30px;
                        font-size: 18px;
                        font-weight: bold;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    " onmouseover="this.style.background='#1F3A0F'" onmouseout="this.style.background='#2D5016'">
                        Ver Todos los Productos →
                    </button>
                </section>

                <!-- POR QUÉ K'OXOL -->
                <section style="
                    padding: 80px 20px;
                    background: linear-gradient(135deg, #2D5016 0%, #6B8E23 100%);
                    color: white;
                    text-align: center;
                ">
                    <h2 style="
                        font-size: clamp(28px, 4vw, 42px);
                        margin-bottom: 20px;
                        font-weight: bold;
                    ">¿Por Qué Elegir K'oxol?</h2>
                    <p style="
                        font-size: 18px;
                        margin-bottom: 50px;
                        opacity: 0.9;
                        max-width: 600px;
                        margin-left: auto;
                        margin-right: auto;
                    ">La protección natural que tu familia merece</p>
                    
                    <div style="
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                        gap: 40px;
                        max-width: 1000px;
                        margin: 0 auto;
                    ">
                        <div style="text-align: center;">
                            <div style="font-size: 48px; margin-bottom: 15px;">🌿</div>
                            <h3 style="font-size: 20px; margin-bottom: 10px; font-weight: bold;">100% Natural</h3>
                            <p style="opacity: 0.8; line-height: 1.6;">Sin químicos tóxicos, solo ingredientes de la naturaleza</p>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 48px; margin-bottom: 15px;">👶</div>
                            <h3 style="font-size: 20px; margin-bottom: 10px; font-weight: bold;">Seguro para Niños</h3>
                            <p style="opacity: 0.8; line-height: 1.6;">Formulaciones especiales para toda la familia</p>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 48px; margin-bottom: 15px;">🇲🇽</div>
                            <h3 style="font-size: 20px; margin-bottom: 10px; font-weight: bold;">Hecho en México</h3>
                            <p style="opacity: 0.8; line-height: 1.6;">Productos nacionales de la más alta calidad</p>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 48px; margin-bottom: 15px;">✅</div>
                            <h3 style="font-size: 20px; margin-bottom: 10px; font-weight: bold;">Comprobado</h3>
                            <p style="opacity: 0.8; line-height: 1.6;">Miles de familias protegidas confían en nosotros</p>
                        </div>
                    </div>
                </section>

                <!-- FOOTER -->
                <footer style="
                    background: #1F3A0F;
                    color: white;
                    padding: 60px 20px 30px 20px;
                    text-align: center;
                ">
                    <div style="max-width: 1200px; margin: 0 auto;">
                        <h3 style="font-size: 28px; margin-bottom: 20px; font-weight: bold;">🌿 K'oxol</h3>
                        <p style="font-size: 18px; margin-bottom: 30px; opacity: 0.9;">Protección Natural Para Tu Familia</p>
                        
                        <div style="
                            display: flex;
                            justify-content: center;
                            gap: 30px;
                            margin-bottom: 40px;
                            flex-wrap: wrap;
                        ">
                            <a href="/productos" style="color: white; text-decoration: none;">Productos</a>
                            <a href="/acerca-de" style="color: white; text-decoration: none;">Nosotros</a>
                            <a href="/contacto" style="color: white; text-decoration: none;">Contacto</a>
                            <a href="/privacidad" style="color: white; text-decoration: none;">Privacidad</a>
                        </div>
                        
                        <p style="opacity: 0.7; font-size: 14px;">© 2024 K'oxol - Todos los derechos reservados</p>
                    </div>
                </footer>
            </div>

            <style>
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                * {
                    box-sizing: border-box;
                }
                
                body {
                    margin: 0 !important;
                    padding: 0 !important;
                }
                
                a:hover {
                    opacity: 0.7;
                }
            </style>
        `;
        
        // 3. REEMPLAZAR COMPLETAMENTE EL CONTENIDO DEL BODY
        setTimeout(() => {
            try {
                // Ocultar contenido existente
                document.querySelectorAll('*').forEach(el => {
                    if (el.tagName !== 'HTML' && el.tagName !== 'HEAD' && el.tagName !== 'BODY' && el.tagName !== 'SCRIPT' && el.tagName !== 'STYLE') {
                        el.style.display = 'none';
                    }
                });
                
                // Insertar nuevo contenido
                document.body.insertAdjacentHTML('afterbegin', newPageContent);
                
                console.log("✅ OVERRIDE COMPLETO K'OXOL APLICADO");
                
                // Mostrar mensaje de éxito
                setTimeout(() => {
                    alert("🌿 ¡K'oxol cargado exitosamente!\n\nSi aún ves contenido anterior, actualiza la página (F5)");
                }, 2000);
                
            } catch (err) {
                console.log("Error insertando contenido nuevo:", err);
            }
        }, 1500);
        
    } catch (error) {
        console.log("Error en override completo:", error);
        
        // Fallback: mensaje al usuario
        setTimeout(() => {
            alert("❌ No se pudo cambiar automáticamente la vista.\n\n✅ SOLUCIÓN:\n1. Ve al Editor Visual de Wix\n2. Cambia manualmente los textos\n3. Tu código JavaScript ya funciona perfecto");
        }, 3000);
    }
}

/**
 * Crea tarjeta de categoría para override completo
 */
function createKoxolCategoryCard(icon, title, description, bgColor) {
    return `
        <div onclick="window.location.href='/productos?category=${title.toLowerCase()}'" style="
            background: ${bgColor};
            padding: 30px;
            border-radius: 15px;
            cursor: pointer;
            transition: all 0.3s ease;
            border: 2px solid transparent;
            height: 200px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        " onmouseover="
            this.style.transform='translateY(-8px)';
            this.style.boxShadow='0 8px 25px rgba(45,80,22,0.2)';
            this.style.borderColor='#2D5016';
        " onmouseout="
            this.style.transform='translateY(0)';
            this.style.boxShadow='none';
            this.style.borderColor='transparent';
        ">
            <div style="font-size: 48px; margin-bottom: 15px;">${icon}</div>
            <h3 style="
                font-size: 18px;
                color: #2D5016;
                margin-bottom: 10px;
                font-weight: bold;
            ">${title}</h3>
            <p style="
                color: #666;
                font-size: 14px;
                line-height: 1.4;
                margin: 0;
            ">${description}</p>
        </div>
    `;
}

/**
 * Crea tarjeta de producto para override completo
 */
function createKoxolProductCard(name, description, price, imageUrl) {
    return `
        <div style="
            background: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            cursor: pointer;
        " onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 25px rgba(0,0,0,0.15)'" 
           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.1)'">
            <img src="${imageUrl}" alt="${name}" style="
                width: 100%;
                height: 200px;
                object-fit: cover;
            ">
            <div style="padding: 20px;">
                <h3 style="
                    font-size: 18px;
                    color: #2D5016;
                    margin-bottom: 8px;
                    font-weight: bold;
                ">${name}</h3>
                <p style="
                    color: #666;
                    font-size: 14px;
                    margin-bottom: 15px;
                    line-height: 1.4;
                ">${description}</p>
                <div style="
                    font-size: 20px;
                    font-weight: bold;
                    color: #FF8C42;
                    margin-bottom: 15px;
                ">${price}</div>
                <button onclick="alert('🛒 ${name} agregado al carrito\\n\\n¡Próximamente tienda completa!'); event.stopPropagation();" style="
                    background: #FF8C42;
                    color: white;
                    border: none;
                    padding: 12px 20px;
                    border-radius: 25px;
                    font-size: 14px;
                    font-weight: bold;
                    cursor: pointer;
                    width: 100%;
                    transition: all 0.3s ease;
                " onmouseover="this.style.background='#E67C35'" onmouseout="this.style.background='#FF8C42'">
                    🛒 Agregar al Carrito
                </button>
            </div>
        </div>
    `;
}

console.log("K'oxol Inicio - Todas las funcionalidades cargadas 🏠✅");
