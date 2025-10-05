// K'oxol Master Page - Funcionalidades globales del sitio
// Colores de marca: Verde #2D5016, Amarillo #F4D03F, Naranja #FF8C42
// API Reference: https://www.wix.com/velo/reference/api-overview/introduction

import wixStores from 'wix-stores-frontend';
import wixLocation from 'wix-location';
import { session } from 'wix-storage-frontend';

$w.onReady(function () {
    console.log("K'oxol - Sitio cargado exitosamente 🌿");
    
    // Inicializar funcionalidades del sitio
    initializeKoxolSite();
});

/**
 * Inicializa las funcionalidades principales de K'oxol
 */
function initializeKoxolSite() {
    // Configurar navegación
    configureNavigation();
    
    // Configurar botón de inversionistas (si existe)
    initializeInvestorButton();
    
    // Configurar búsqueda (si existe)  
    initializeSearchFunctionality();
    
    // Configurar carrito (si existe)
    initializeCartFunctionality();
    
    // Configurar newsletter (si existe)
    configureNewsletter();
    
    // Banner de bienvenida
    showWelcomeBanner();
    
    // Aplicar colores de marca
    applyBrandColors();
}

/**
 * Configura la navegación del sitio
 */
function configureNavigation() {
    // Configurar enlaces de navegación principales
    try {
        // Botón Inicio - redirige a página de inicio
        if ($w("#navInicio")) {
            $w("#navInicio").onClick(() => {
                wixLocation.to("/");
            });
        }
        
        // Botón Productos - redirige a página de productos
        if ($w("#navProductos")) {
            $w("#navProductos").onClick(() => {
                wixLocation.to("/productos");
            });
        }
        
        // Botón Nosotros - redirige a página acerca de
        if ($w("#navNosotros")) {
            $w("#navNosotros").onClick(() => {
                wixLocation.to("/acerca-de");
            });
        }
        
        // Botón Contacto - redirige a página de contacto  
        if ($w("#navContacto")) {
            $w("#navContacto").onClick(() => {
                wixLocation.to("/contacto");
            });
        }
        
        console.log("Navegación configurada ✅");
    } catch (error) {
        console.log("Error configurando navegación:", error);
    }
}

/**
 * Inicializa el botón flotante de inversionistas
 */
function initializeInvestorButton() {
    try {
        if ($w("#investorButton")) {
            $w("#investorButton").onClick(() => {
                openInvestorModal();
            });
            
            // Hacer visible el botón con efecto
            $w("#investorButton").show("fade", { duration: 500 });
            console.log("Botón de inversionistas configurado ✅");
        }
    } catch (error) {
        console.log("Botón de inversionistas no encontrado");
    }
}

/**
 * Abre el modal de inversionistas
 */
function openInvestorModal() {
    try {
        if ($w("#investorModal")) {
            $w("#investorModal").show("slideInUp", { duration: 500 });
            
            // Configurar formulario
            configureInvestorForm();
        } else if ($w("#investorLightbox")) {
            $w("#investorLightbox").show();
        } else {
            // Si no hay modal, redirigir a página de contacto con parámetro
            wixLocation.to("/contacto?tipo=inversionista");
        }
    } catch (error) {
        console.log("Error abriendo modal de inversionista:", error);
    }
}

/**
 * Configura el formulario de inversionistas  
 */
function configureInvestorForm() {
    try {
        // Botón enviar
        if ($w("#submitInvestorBtn")) {
            $w("#submitInvestorBtn").onClick(() => {
                submitInvestorForm();
            });
        }
        
        // Botón cerrar
        if ($w("#closeInvestorModal")) {
            $w("#closeInvestorModal").onClick(() => {
                closeInvestorModal();
            });
        }
    } catch (error) {
        console.log("Error configurando formulario inversionista:", error);
    }
}

/**
 * Envía el formulario de inversionistas
 */
function submitInvestorForm() {
    try {
        // Obtener datos del formulario
        const formData = {
            name: $w("#investorName") ? $w("#investorName").value : '',
            email: $w("#investorEmail") ? $w("#investorEmail").value : '',
            phone: $w("#investorPhone") ? $w("#investorPhone").value : '',
            message: $w("#investorMessage") ? $w("#investorMessage").value : ''
        };
        
        // Validación básica
        if (!formData.name || !formData.email) {
            showMessage("Por favor completa los campos obligatorios", "error");
            return;
        }
        
        if (!validateEmail(formData.email)) {
            showMessage("Por favor ingresa un email válido", "error");
            return;
        }
        
        // Aquí conectarías con tu backend o servicio de email
        console.log("Datos del inversionista:", formData);
        
        // Mostrar mensaje de éxito
        showMessage("¡Gracias! Nos pondremos en contacto contigo pronto", "success");
        
        // Cerrar modal después de 2 segundos
        setTimeout(() => {
            closeInvestorModal();
            clearInvestorForm();
        }, 2000);
        
    } catch (error) {
        console.log("Error enviando formulario:", error);
        showMessage("Error al enviar. Por favor intenta de nuevo", "error");
    }
}

/**
 * Cierra el modal de inversionistas
 */
function closeInvestorModal() {
    try {
        if ($w("#investorModal")) {
            $w("#investorModal").hide("slideOutDown", { duration: 500 });
        } else if ($w("#investorLightbox")) {
            $w("#investorLightbox").hide();
        }
    } catch (error) {
        console.log("Error cerrando modal:", error);
    }
}

/**
 * Limpia el formulario de inversionistas
 */
function clearInvestorForm() {
    try {
        const fields = ["#investorName", "#investorEmail", "#investorPhone", "#investorMessage"];
        fields.forEach(field => {
            if ($w(field)) {
                $w(field).value = "";
            }
        });
    } catch (error) {
        console.log("Error limpiando formulario:", error);
    }
}

/**
 * Configura la funcionalidad de búsqueda
 */
function initializeSearchFunctionality() {
    try {
        // Input de búsqueda
        if ($w("#searchInput")) {
            $w("#searchInput").onKeyPress((event) => {
                if (event.key === 'Enter') {
                    performSearch();
                }
            });
        }
        
        // Botón de búsqueda
        if ($w("#searchButton")) {
            $w("#searchButton").onClick(() => {
                performSearch();
            });
        }
        
        console.log("Búsqueda configurada ✅");
    } catch (error) {
        console.log("Búsqueda no disponible");
    }
}

/**
 * Realiza la búsqueda de productos
 */
function performSearch() {
    try {
        const searchTerm = $w("#searchInput").value;
        if (searchTerm && searchTerm.trim()) {
            // Redirigir a página de productos con término de búsqueda
            wixLocation.to(`/productos?search=${encodeURIComponent(searchTerm.trim())}`);
        }
    } catch (error) {
        console.log("Error en búsqueda:", error);
    }
}

/**
 * Inicializa funcionalidad del carrito
 */
function initializeCartFunctionality() {
    try {
        // Verificar si hay elementos de carrito
        if ($w("#cartIcon") || $w("#cartButton")) {
            // Listener para cambios en el carrito
            wixStores.onCartChanged((cart) => {
                updateCartCounter(cart.lineItems.length);
            });
            
            // Obtener estado inicial del carrito
            wixStores.getCurrentCart()
                .then((cart) => {
                    updateCartCounter(cart.lineItems.length);
                })
                .catch((error) => {
                    console.log("Error obteniendo carrito:", error);
                });
                
            console.log("Carrito configurado ✅");
        }
    } catch (error) {
        console.log("Carrito no disponible en esta página");
    }
}

/**
 * Actualiza el contador del carrito
 */
function updateCartCounter(itemCount) {
    try {
        // Actualizar badge del carrito
        if ($w("#cartBadge")) {
            if (itemCount > 0) {
                $w("#cartBadge").text = itemCount.toString();
                $w("#cartBadge").show();
            } else {
                $w("#cartBadge").hide();
            }
        }
        
        // Actualizar texto del carrito (si existe)
        if ($w("#cartCount")) {
            $w("#cartCount").text = `(${itemCount})`;
        }
    } catch (error) {
        console.log("Error actualizando contador carrito:", error);
    }
}

/**
 * Configura el newsletter
 */
function configureNewsletter() {
    try {
        if ($w("#newsletterForm") && $w("#newsletterSubmit")) {
            $w("#newsletterSubmit").onClick(() => {
                subscribeToNewsletter();
            });
            console.log("Newsletter configurado ✅");
        }
    } catch (error) {
        console.log("Newsletter no disponible");
    }
}

/**
 * Suscribe al newsletter
 */
function subscribeToNewsletter() {
    try {
        const email = $w("#newsletterEmail").value;
        
        if (!email) {
            showMessage("Por favor ingresa tu email", "error");
            return;
        }
        
        if (!validateEmail(email)) {
            showMessage("Por favor ingresa un email válido", "error");
            return;
        }
        
        // Aquí conectarías con tu servicio de newsletter
        console.log("Suscribir al newsletter:", email);
        
        // Mostrar éxito
        showMessage("¡Gracias! Te has suscrito al newsletter de K'oxol 🌿", "success");
        $w("#newsletterEmail").value = "";
        
    } catch (error) {
        console.log("Error en suscripción newsletter:", error);
        showMessage("Error al suscribir. Intenta de nuevo", "error");
    }
}

/**
 * Muestra banner de bienvenida para nuevos visitantes
 */
function showWelcomeBanner() {
    try {
        // Verificar si es primera visita
        const hasVisited = session.getItem('koxol_visited');
        
        if (!hasVisited && $w("#welcomeBanner")) {
            $w("#welcomeBanner").show("slideInDown", { duration: 800 });
            
            // Marcar como visitado
            session.setItem('koxol_visited', 'true');
            
            // Configurar botones del banner
            if ($w("#welcomeSignup")) {
                $w("#welcomeSignup").onClick(() => {
                    // Redirigir a registro o productos con descuento
                    wixLocation.to("/productos?descuento=bienvenida");
                });
            }
            
            if ($w("#closeWelcome")) {
                $w("#closeWelcome").onClick(() => {
                    $w("#welcomeBanner").hide("slideOutUp", { duration: 500 });
                });
            }
            
            // Auto-ocultar después de 8 segundos
            setTimeout(() => {
                try {
                    if ($w("#welcomeBanner") && $w("#welcomeBanner").isVisible) {
                        $w("#welcomeBanner").hide("slideOutUp", { duration: 500 });
                    }
                } catch (e) {
                    // Banner ya fue cerrado manualmente
                }
            }, 8000);
            
            console.log("Banner de bienvenida mostrado ✅");
        }
    } catch (error) {
        console.log("Banner de bienvenida no disponible");
    }
}

/**
 * Aplica los colores de marca K'oxol
 */
function applyBrandColors() {
    // Colores oficiales de K'oxol
    const brandColors = {
        primary: '#2D5016',      // Verde principal K'oxol
        secondary: '#6B8E23',    // Verde claro  
        accent: '#F4D03F',       // Amarillo/Dorado
        cta: '#FF8C42',          // Naranja para CTAs
        dark: '#2C3E50',         // Texto oscuro
        light: '#FDFEFE'         // Fondo claro
    };
    
    try {
        // Aplicar estilos dinámicos si hay elementos específicos
        // Los colores principales se manejan en el diseño de Wix
        console.log("Colores de marca K'oxol aplicados ✅", brandColors);
    } catch (error) {
        console.log("Error aplicando colores:", error);
    }
}

/**
 * Utilidades - Validación de email
 */
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Utilidades - Mostrar mensajes
 */
function showMessage(message, type = "info") {
    try {
        console.log(`${type.toUpperCase()}: ${message}`);
        
        // Si hay elementos de mensaje en el diseño, usarlos
        if ($w("#messageBar")) {
            $w("#messageBar").text = message;
            $w("#messageBar").show();
            
            // Auto-ocultar después de 3 segundos
            setTimeout(() => {
                if ($w("#messageBar")) {
                    $w("#messageBar").hide();
                }
            }, 3000);
        }
    } catch (error) {
        console.log("Error mostrando mensaje:", error);
    }
}

// Configurar enlaces de redes sociales (si existen)
$w.onReady(function() {
    try {
        const socialLinks = {
            "#facebookLink": "https://facebook.com/koxol",
            "#instagramLink": "https://instagram.com/koxol", 
            "#twitterLink": "https://twitter.com/koxol",
            "#whatsappLink": "https://wa.me/52XXXXXXXXX"
        };
        
        Object.keys(socialLinks).forEach(selector => {
            if ($w(selector)) {
                $w(selector).onClick(() => {
                    wixLocation.to(socialLinks[selector]);
                });
            }
        });
    } catch (error) {
        console.log("Enlaces sociales no configurados");
    }
});

console.log("K'oxol Master Page cargado completamente 🌿✅");
