// K'oxol - Página de Contacto
// Conecta con nosotros 📞🌿
// API Reference: https://www.wix.com/velo/reference/api-overview/introduction

import wixLocation from 'wix-location';
import { fetch } from 'wix-fetch';

$w.onReady(function () {
    console.log("K'oxol Contacto - Página cargada 📞🌿");
    
    // Inicializar página de contacto
    initializeContactPage();
    
    // Verificar si hay parámetros en URL (ej: tipo=inversionista)
    checkUrlParameters();
});

/**
 * Inicializa todas las funcionalidades de la página de contacto
 */
function initializeContactPage() {
    // Configurar formulario principal
    setupContactForm();
    
    // Configurar mapa (si existe)
    setupMap();
    
    // Configurar información de contacto
    setupContactInfo();
    
    // Configurar chat bot (si existe)
    setupChatBot();
    
    console.log("Página de contacto K'oxol inicializada ✅");
}

/**
 * Verifica parámetros en la URL para pre-llenar formulario
 */
function checkUrlParameters() {
    try {
        const urlParams = wixLocation.query;
        
        // Si viene de "Únete a la familia K'oxol"
        if (urlParams.tipo === 'inversionista') {
            // Pre-seleccionar tipo de consulta
            if ($w("#tipoConsulta")) {
                $w("#tipoConsulta").value = "Inversionistas";
            }
            
            // Mostrar mensaje específico
            if ($w("#mensajeEspecial")) {
                $w("#mensajeEspecial").text = "¡Gracias por tu interés en unirte a la familia K'oxol! 🤝";
                $w("#mensajeEspecial").show();
            }
        }
        
        // Si viene de una página de producto
        if (urlParams.producto) {
            if ($w("#tipoConsulta")) {
                $w("#tipoConsulta").value = "Productos";
            }
            
            if ($w("#mensaje")) {
                $w("#mensaje").value = `Hola, me interesa saber más sobre: ${decodeURIComponent(urlParams.producto)}`;
            }
        }
    } catch (error) {
        console.log("Error verificando parámetros URL:", error);
    }
}

/**
 * Configura el formulario de contacto
 */
function setupContactForm() {
    try {
        // Validación en tiempo real de campos
        setupFormValidation();
        
        // Botón de envío
        if ($w("#enviarContacto")) {
            $w("#enviarContacto").onClick(() => {
                submitContactForm();
            });
        }
        
        // Botón de limpiar formulario
        if ($w("#limpiarFormulario")) {
            $w("#limpiarFormulario").onClick(() => {
                clearContactForm();
            });
        }
        
        console.log("Formulario de contacto configurado ✅");
    } catch (error) {
        console.log("Error configurando formulario:", error);
    }
}

/**
 * Configura la validación del formulario
 */
function setupFormValidation() {
    try {
        // Validación del email en tiempo real
        if ($w("#email")) {
            $w("#email").onInput(() => {
                validateEmailField();
            });
        }
        
        // Validación del teléfono
        if ($w("#telefono")) {
            $w("#telefono").onInput(() => {
                validatePhoneField();
            });
        }
        
        // Contador de caracteres del mensaje
        if ($w("#mensaje")) {
            $w("#mensaje").onInput(() => {
                updateCharacterCount();
            });
        }
        
        console.log("Validación de formulario configurada ✅");
    } catch (error) {
        console.log("Error configurando validación:", error);
    }
}

/**
 * Valida el campo de email
 */
function validateEmailField() {
    try {
        const email = $w("#email").value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email && !emailRegex.test(email)) {
            showFieldError("#emailError", "Por favor ingresa un email válido");
            $w("#email").style.borderColor = "#FF6B6B";
        } else {
            hideFieldError("#emailError");
            $w("#email").style.borderColor = "#2D5016";
        }
    } catch (error) {
        console.log("Error validando email:", error);
    }
}

/**
 * Valida el campo de teléfono
 */
function validatePhoneField() {
    try {
        const phone = $w("#telefono").value;
        const phoneRegex = /^[\+]?[(]?[\d\s\-\(\)]{10,}$/;
        
        if (phone && !phoneRegex.test(phone)) {
            showFieldError("#telefonoError", "Por favor ingresa un teléfono válido");
            $w("#telefono").style.borderColor = "#FF6B6B";
        } else {
            hideFieldError("#telefonoError");
            $w("#telefono").style.borderColor = "#2D5016";
        }
    } catch (error) {
        console.log("Error validando teléfono:", error);
    }
}

/**
 * Actualiza el contador de caracteres del mensaje
 */
function updateCharacterCount() {
    try {
        const message = $w("#mensaje").value;
        const maxLength = 500;
        const remaining = maxLength - message.length;
        
        if ($w("#contadorCaracteres")) {
            $w("#contadorCaracteres").text = `${message.length}/${maxLength} caracteres`;
            
            if (remaining < 50) {
                $w("#contadorCaracteres").style.color = "#FF8C42"; // Naranja de advertencia
            } else {
                $w("#contadorCaracteres").style.color = "#2D5016"; // Verde normal
            }
        }
    } catch (error) {
        console.log("Error actualizando contador:", error);
    }
}

/**
 * Envía el formulario de contacto
 */
function submitContactForm() {
    try {
        // Obtener datos del formulario
        const formData = {
            nombre: $w("#nombre") ? $w("#nombre").value : '',
            email: $w("#email") ? $w("#email").value : '',
            telefono: $w("#telefono") ? $w("#telefono").value : '',
            tipoConsulta: $w("#tipoConsulta") ? $w("#tipoConsulta").value : 'General',
            mensaje: $w("#mensaje") ? $w("#mensaje").value : ''
        };
        
        // Validar campos obligatorios
        if (!formData.nombre || !formData.email || !formData.mensaje) {
            showFormMessage("Por favor completa todos los campos obligatorios (*)", "error");
            highlightRequiredFields();
            return;
        }
        
        // Validar formato de email
        if (!validateEmail(formData.email)) {
            showFormMessage("Por favor ingresa un email válido", "error");
            $w("#email").focus();
            return;
        }
        
        // Mostrar loader
        showLoader(true);
        
        // Enviar formulario
        sendContactForm(formData);
        
    } catch (error) {
        console.log("Error enviando formulario:", error);
        showFormMessage("Error inesperado. Por favor intenta de nuevo.", "error");
        showLoader(false);
    }
}

/**
 * Envía el formulario de contacto
 */
function sendContactForm(formData) {
    try {
        console.log("Enviando formulario de contacto:", formData);
        
        // Aquí conectarías con tu backend o servicio de email
        // Por ahora simulamos el envío
        
        setTimeout(() => {
            // Simular éxito
            showFormMessage("¡Gracias por contactarnos! Te responderemos pronto 🌿", "success");
            showLoader(false);
            
            // Limpiar formulario después de 2 segundos
            setTimeout(() => {
                clearContactForm();
            }, 2000);
            
            // Opcional: enviar analytics o tracking
            trackContactForm(formData.tipoConsulta);
            
        }, 2000);
        
    } catch (error) {
        console.log("Error enviando formulario:", error);
        showFormMessage("Error al enviar. Por favor intenta de nuevo.", "error");
        showLoader(false);
    }
}

/**
 * Limpia el formulario de contacto
 */
function clearContactForm() {
    try {
        const fields = ["#nombre", "#email", "#telefono", "#mensaje"];
        
        fields.forEach(field => {
            if ($w(field)) {
                $w(field).value = "";
                $w(field).style.borderColor = "#E5E5E5"; // Color normal
            }
        });
        
        // Resetear dropdown
        if ($w("#tipoConsulta")) {
            $w("#tipoConsulta").value = "General";
        }
        
        // Limpiar mensajes de error
        hideAllFieldErrors();
        
        // Limpiar contador
        if ($w("#contadorCaracteres")) {
            $w("#contadorCaracteres").text = "0/500 caracteres";
        }
        
        console.log("Formulario limpio ✅");
    } catch (error) {
        console.log("Error limpiando formulario:", error);
    }
}

/**
 * Configura el mapa de Google Maps
 */
function setupMap() {
    try {
        // El mapa se configura en el diseñador de Wix
        // Aquí podemos agregar funcionalidades adicionales
        
        if ($w("#googleMap")) {
            console.log("Mapa configurado ✅");
        }
        
        // Botón para abrir en Google Maps
        if ($w("#abrirEnMaps")) {
            $w("#abrirEnMaps").onClick(() => {
                const direccion = "Calle Ejemplo 123, Ciudad de México"; // Tu dirección real
                const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(direccion)}`;
                wixLocation.to(mapsUrl);
            });
        }
        
    } catch (error) {
        console.log("Mapa no disponible");
    }
}

/**
 * Configura la información de contacto
 */
function setupContactInfo() {
    try {
        // Botón para llamar
        if ($w("#botonLlamar")) {
            $w("#botonLlamar").onClick(() => {
                wixLocation.to("tel:+525555555555"); // Tu número real
            });
        }
        
        // Botón para WhatsApp
        if ($w("#botonWhatsApp")) {
            $w("#botonWhatsApp").onClick(() => {
                const mensaje = encodeURIComponent("Hola K'oxol, me gustaría obtener más información sobre sus productos naturales.");
                wixLocation.to(`https://wa.me/525555555555?text=${mensaje}`);
            });
        }
        
        // Botón para email
        if ($w("#botonEmail")) {
            $w("#botonEmail").onClick(() => {
                wixLocation.to("mailto:contacto@koxol.com?subject=Consulta desde el sitio web");
            });
        }
        
        console.log("Información de contacto configurada ✅");
    } catch (error) {
        console.log("Error configurando info contacto:", error);
    }
}

/**
 * Configura el chat bot
 */
function setupChatBot() {
    try {
        if ($w("#chatBot")) {
            $w("#chatBot").onClick(() => {
                openChatBot();
            });
        }
        
        // Auto-mostrar chat después de 30 segundos
        setTimeout(() => {
            if ($w("#chatBotPrompt")) {
                $w("#chatBotPrompt").show("slideInUp", { duration: 500 });
                
                // Auto-ocultar después de 5 segundos
                setTimeout(() => {
                    $w("#chatBotPrompt").hide("slideOutDown", { duration: 500 });
                }, 5000);
            }
        }, 30000);
        
    } catch (error) {
        console.log("Chat bot no disponible");
    }
}

/**
 * Abre el chat bot
 */
function openChatBot() {
    try {
        // Aquí integrarías tu solución de chat
        console.log("Abriendo chat bot...");
        
        // Ejemplo: redirigir a WhatsApp
        const mensaje = encodeURIComponent("¡Hola! Necesito ayuda con los productos K'oxol 🌿");
        wixLocation.to(`https://wa.me/525555555555?text=${mensaje}`);
        
    } catch (error) {
        console.log("Error abriendo chat:", error);
    }
}

/**
 * Utilidades del formulario
 */

function showFieldError(selector, message) {
    try {
        if ($w(selector)) {
            $w(selector).text = message;
            $w(selector).show();
            $w(selector).style.color = "#FF6B6B";
        }
    } catch (error) {
        console.log("Error mostrando error de campo:", error);
    }
}

function hideFieldError(selector) {
    try {
        if ($w(selector)) {
            $w(selector).hide();
        }
    } catch (error) {
        console.log("Error ocultando error de campo:", error);
    }
}

function hideAllFieldErrors() {
    const errorFields = ["#nombreError", "#emailError", "#telefonoError", "#mensajeError"];
    errorFields.forEach(field => hideFieldError(field));
}

function highlightRequiredFields() {
    try {
        const requiredFields = ["#nombre", "#email", "#mensaje"];
        requiredFields.forEach(field => {
            if ($w(field) && !$w(field).value) {
                $w(field).style.borderColor = "#FF6B6B";
            }
        });
    } catch (error) {
        console.log("Error resaltando campos:", error);
    }
}

function showFormMessage(message, type) {
    try {
        if ($w("#mensajeFormulario")) {
            $w("#mensajeFormulario").text = message;
            $w("#mensajeFormulario").style.color = type === "error" ? "#FF6B6B" : "#2D5016";
            $w("#mensajeFormulario").show();
            
            // Auto-ocultar después de 5 segundos
            setTimeout(() => {
                $w("#mensajeFormulario").hide();
            }, 5000);
        }
    } catch (error) {
        console.log("Error mostrando mensaje:", error);
    }
}

function showLoader(show) {
    try {
        if ($w("#loaderFormulario")) {
            if (show) {
                $w("#loaderFormulario").show();
                $w("#enviarContacto").disable();
            } else {
                $w("#loaderFormulario").hide();
                $w("#enviarContacto").enable();
            }
        }
    } catch (error) {
        console.log("Error con loader:", error);
    }
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function trackContactForm(tipo) {
    try {
        console.log(`Formulario de contacto enviado - Tipo: ${tipo}`);
        // Aquí agregarías tu código de analytics (Google Analytics, etc.)
    } catch (error) {
        console.log("Error en tracking:", error);
    }
}

console.log("K'oxol Contacto - Todas las funcionalidades cargadas 📞✅");erence: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

$w.onReady(function () {
    // Write your JavaScript here

    // To select an element by ID use: $w('#elementID')

    // Click 'Preview' to run your code
});
