// K'oxol - Página de Inicio (Homepage)
// Protección Natural Para Tu Familia 🌿
// API Reference: https://www.wix.com/velo/reference/api-overview/introduction

import wixStores from 'wix-stores-frontend';
import wixLocation from 'wix-location';
import { session } from 'wix-storage-frontend';

$w.onReady(function () {
    console.log("K'oxol Inicio - Página cargada 🏠🌿");
    
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

console.log("K'oxol Inicio - Todas las funcionalidades cargadas 🏠✅");erence: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

$w.onReady(function () {
    // Write your JavaScript here

    // To select an element by ID use: $w('#elementID')

    // Click 'Preview' to run your code
});
