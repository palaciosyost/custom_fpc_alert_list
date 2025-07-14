/** @odoo-module **/

$(document).ready(function () {
    // Crear el modal dinámicamente
    const modal = document.createElement("div");
    modal.id = "modal_price_list_notice";
    modal.style.display = "none";
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    modal.style.zIndex = "1050";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.display = "flex";

    const modalContent = document.createElement("div");
    modalContent.style.background = "#fff";
    modalContent.style.padding = "25px 30px";
    modalContent.style.borderRadius = "8px";
    modalContent.style.maxWidth = "600px";
    modalContent.style.width = "90%";
    modalContent.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
    modalContent.style.position = "relative";
    modalContent.style.fontFamily = "'Helvetica Neue', sans-serif";

    // Botón cerrar con diseño moderno
    const closeButton = document.createElement("button");
    closeButton.innerHTML = "&times;";
    closeButton.setAttribute("aria-label", "Cerrar");
    closeButton.style.position = "absolute";
    closeButton.style.top = "15px";
    closeButton.style.right = "20px";
    closeButton.style.fontSize = "24px";
    closeButton.style.border = "none";
    closeButton.style.background = "transparent";
    closeButton.style.cursor = "pointer";
    closeButton.style.color = "#555";

    // Contenido del modal
    const heading = document.createElement("h3");
    heading.textContent = "Lista de precios actualizada";
    heading.style.marginTop = "0";
    heading.style.color = "#222";
    heading.style.fontSize = "20px";

    const message = document.createElement("p");
    message.textContent = "Estás cambiando la lista de precios. Los precios serán actualizados internamente. Gracias por tu comprensión.";
    message.style.margin = "10px 0 0";
    message.style.fontSize = "15px";
    message.style.color = "#444";

    // Estructura final
    modalContent.appendChild(closeButton);
    modalContent.appendChild(heading);
    modalContent.appendChild(message);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Mostrar/Ocultar
    const showModal = () => {
        modal.style.display = "flex";
    };

    const hideModal = () => {
        modal.style.display = "none";
    };

    // Eventos
    closeButton.addEventListener("click", hideModal);
    window.addEventListener("click", (e) => {
        if (e.target === modal) hideModal();
    });

    // Disparadores
    const dropdown = document.querySelector(".o_pricelist_dropdown a");
    const dropdownMobile = document.querySelector(".o_wsale_offcanvas_title");

    if (dropdown) dropdown.addEventListener("click", e => { e.preventDefault(); showModal(); });
    if (dropdownMobile) dropdownMobile.addEventListener("click", e => { e.preventDefault(); showModal(); });
});
