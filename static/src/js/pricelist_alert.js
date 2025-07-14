/** @odoo-module **/

$(document).ready(function () {
    let redirectUrl = null; // Guardamos el href aquí

    // Crear el modal dinámicamente
    const modal = document.createElement("div");
    modal.id = "modal_price_list_notice";
    Object.assign(modal.style, {
        display: "none",
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: "9999",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Helvetica Neue', sans-serif",
    });

    const modalContent = document.createElement("div");
    Object.assign(modalContent.style, {
        background: "#fff",
        padding: "25px 30px",
        borderRadius: "8px",
        maxWidth: "600px",
        width: "90%",
        boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
        position: "relative",
    });

    const closeButton = document.createElement("button");
    closeButton.innerHTML = "&times;";
    closeButton.setAttribute("aria-label", "Cerrar");
    Object.assign(closeButton.style, {
        position: "absolute",
        top: "15px",
        right: "20px",
        fontSize: "24px",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        color: "#555",
    });

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

    modalContent.appendChild(closeButton);
    modalContent.appendChild(heading);
    modalContent.appendChild(message);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    const showModal = () => {
        modal.style.display = "flex";
    };

    const hideModal = () => {
        modal.style.display = "none";
    };

    // 🔄 Cuando el usuario cierra el modal, redirigimos
    closeButton.addEventListener("click", () => {
        hideModal();
        if (redirectUrl) {
            window.location.href = redirectUrl;
        }
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) hideModal();
    });

    // Interceptar clics en los ítems del dropdown
    const pricelistItems = document.querySelectorAll(".o_pricelist_dropdown .dropdown-menu a");

    pricelistItems.forEach(item => {
        item.addEventListener("click", function (e) {
            e.preventDefault(); // ❌ Evita redirección inmediata
            redirectUrl = this.href; // 🔒 Guarda la URL
            showModal(); // 📣 Muestra el aviso
        });
    });


});
