function calcularPromedio() {
    // Obtener las calificaciones de los campos de entrada
    const calificaciones = document.querySelectorAll('.calificacion');
    let suma = 0;
    let cantidad = 0;

    calificaciones.forEach(calificacion => {
        const valor = parseFloat(calificacion.value);
        if (!isNaN(valor)) {
            suma += valor;
            cantidad++;
        }
    });

    // Calcular el promedio
    const promedio = cantidad > 0 ? suma / cantidad : 0;

    // Mostrar el resultado en la tabla
    const resultados = document.getElementById('resultados');
    resultados.innerHTML = `
        <tr>
            <td>Promedio</td>
            <td>${promedio.toFixed(2)}</td>
        </tr>
    `;
}