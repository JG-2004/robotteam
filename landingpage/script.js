document.getElementById("demoForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const empresa = document.getElementById("empresa").value;
    const fecha = document.getElementById("fecha").value;
    const mensaje = document.getElementById("mensaje").value;

    const telefono = "+51933554206"; // 👈 TU NÚMERO con código país (Perú = 51)

    const texto = `
📩 *Solicitud de Demo*
👤 Nombre: ${nombre}
📧 Correo: ${correo}
🏢 Empresa: ${empresa}
📅 Fecha Demo: ${fecha}
📝 Mensaje: ${mensaje}
  `;

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
});
