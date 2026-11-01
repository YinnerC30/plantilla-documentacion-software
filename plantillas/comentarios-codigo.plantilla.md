<!--
PLANTILLA: COMENTARIOS EN EL CÓDIGO
Guía con moldes copiables. Hay DOS tipos de comentario y un tipo que sobra.
Ejemplo real: ../ejemplo-api-boletos/src/pagos.js
-->

# Comentarios en el código

## Regla de oro

> Si vas a tener que explicarlo en una revisión de código, coméntalo ahora. (Guías de estilo de Google)

## Tipo 1 — Comentario de función: **qué hace y cómo usarla**

Va encima de la función. Lo lee quien la llama sin abrirla, y las herramientas que generan la referencia.
Incluye: qué hace, qué devuelve, qué errores puede dar, y enlaces si hay un procedimiento humano.

```js
/**
 * <Qué hace, en una frase: "Compra un boleto: reserva, cobra y confirma">.
 *
 * <Qué devuelve y bajo qué condiciones>.
 * Errores: <CODIGO_A> (<cuándo>), <CODIGO_B> (<cuándo>).
 *
 * @param {<tipo>} <nombre> <descripción>
 * @returns {<tipo>} <descripción>
 */
```

## Tipo 2 — Comentario del "porqué": **lo que el código no puede decir**

Va junto a la línea "rara" o delicada. Corto (2–4 líneas): la advertencia + el motivo + un enlace al detalle.
Es la placa clavada en el desvío de la laguna: *"Desvío por nidos, no cortar. Detalles en la bitácora."*

```js
// <ADVERTENCIA en imperativo: "NO REINTENTAR este cobro">.
// <Motivo en una frase: "El proveedor a veces cobra aunque la respuesta no llegue a tiempo">.
// Razón completa: <docs/decisiones/NNNN-titulo.md>
```

Úsalo cuando: haya un workaround, algo que parece un descuido pero es intencional, una restricción externa,
un orden de operaciones que importa, o un bug que ya ocurrió.

## Lo que NO se comenta

```js
// Cobra la tarjeta          ← repite la línea de abajo; mañana puede mentir
cobrarTarjeta(datos);
```

- Lo que el código ya dice (un buen nombre vale más que un comentario).
- Historial de cambios ("antes hacía X") — para eso está el control de versiones.
- Código comentado "por si acaso".
- Razones inventadas. Si no sabes el porqué, no lo escribas: averígualo o deja `TODO(<nombre>): confirmar motivo`.

## Cuándo se actualiza

Los comentarios viajan en el mismo pull request que el código. Si cambias la línea, relee el comentario.
