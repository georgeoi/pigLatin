# Code Challenge: PigLatin

Pig Latin es una forma de alterar las palabras en inglés. Las reglas son las siguientes:

- Si una palabra comienza con una consonante, tome la primera consonante o grupo de consonantes, muévala al final de la palabra y agregue "ay".

- Si una palabra comienza con una vocal, simplemente agregue "way" al final.

## Instrucciones
- Crear un nuevo repositorio utilizando este repositorio como template (Boton: use this template).
- Editar el código de la función definida en el archivo index.js con un algoritmo que permita obtener los resultados esperados en los test.
- Ejecutar los test validando que todos resulten exitosos

## Ejecutar Pruebas

Instalar dependencias (mocha)
```
npm install
```

Ejecutar test
```
npm run test
```
## Entrada

##### Parámetro 1
- **nombre**: str
- **tipo**: String
- **limitaciones**: 0 < **str.length** <= 10

## Salida

- **tipo**: String

## Ejemplo
El string "california" debe retornar "aliforniacay"

## Tests

### Test 1  

- **Parametros**: str = "california"    
- **Resultado esperado**: "aliforniacay"
---
### Test 2  

- **Parametros**:  str = "paragraphs"  
- **Resultado esperado**: "aragraphspay"
---
### Test 3  

- **Parametros**:  str = "glove"  
- **Resultado esperado**: "oveglay"
---
### Test 4  

- **Parametros**:  str = "algorithm"  
- **Resultado esperado**: "algorithmway"
---
### Test 5  

- **Parametros**:  str = "eight"  
- **Resultado esperado**: "eightway"
---
### Test 6 

- **Parametros**:  str = "schwartz"  
- **Resultado esperado**: "artzschway"
---
### Test 7 

- **Parametros**:  str = "rhythm"  
- **Resultado esperado**: "rhythmay"
