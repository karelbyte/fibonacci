# API Fibonacci

Esta es una API simple que calcula valores de la secuencia de Fibonacci según un índice proporcionado.

## Uso

### Obtener el valor de Fibonacci

- **URL**: `/fibonacci/:n`
- **Método**: GET
- **Parámetro de Ruta**:
  - `:n` (índice): El índice para el cual deseas calcular el valor de Fibonacci.
- **Respuesta Exitosa**:
  - Código de Estado: 200 OK
  - Cuerpo de Respuesta JSON:
    ```json
    {
      "n": 5,
      "result": 5
    }
    ```
- **Respuesta de Error**:
  - Código de Estado: 400 Bad Request
  - Cuerpo de Respuesta JSON en caso de índice no válido:
    ```json
    {
      "error": "The value of n must be a non-negative integer."
    }
    ```

## Ejecución

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/mi-api-fibonacci.git
   cd mi-api-fibonacci```

## Optimizaciones Futuras
1. Implementar un sistema de caché para almacenar valores de Fibonacci ya calculados y mejorar el rendimiento.
2. Agregar manejo de errores más robusto para valores de n negativos o no enteros.
3. Incluir documentación detallada sobre cómo utilizar la API.
4. Agregar pruebas unitarias para garantizar la robustez de la API.