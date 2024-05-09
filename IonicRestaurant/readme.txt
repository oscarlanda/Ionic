#INSTALAR EL JSDK Y CCONFIGURAR LA VARIABLA JAVA_HOME

# Agregar en .eslintrc.json en seccion overrides
 /*---------------------------------------------
Agregar Funciones Vacias
Se agrega para permitir agregar funciones vacias
-----------------------------------------------*/
"no-empty-function": "off",
"@typescript-eslint/no-empty-function":"off",
"@angular-eslint/no-empty-lifecycle-method": "off"
/*---------------------------------------------
Agregar Funciones Vacias
-----------------------------------------------*/

# En tsconfig.json agregar en la seccion de "angularCompilerOptions" la siguiente linea

"angularCompilerOptions": {  
    "strictTemplates": false //<====Agregar esta linea
  }

# Agregar ANDROID_HOME a las variables de entorno
# en run colocar %appdata%
# buscar  la ruta
C:\Users\famil\AppData\Local\Android\Sdk
# en la variable de entorno PATH agregar estas dos rutas
C:\Users\famil\AppData\Local\Android\Sdk\platforms
C:\Users\famil\AppData\Local\Android\Sdk\platform-tools

# Para volverla nativa de android
# ionic capacitor add android

# Agregar esta linea en angular.json
"optimization": { "styles": { "inlineCritical": false } },

la linea anterior debe colocarse dentro de build en el apartado options como se muestra acontinuacion

"build": { "options": { "optimization": { "styles": { "inlineCritical": false } } } }

# Agregar IonicModule en standalone mode no se agrega en automatico, agregar esta linea en el main.ts
# en la seccion providers

 importProvidersFrom(IonicModule.forRoot({innerHTMLTemplatesEnabled: true})), 

 ej: 
 import { IonicModule } from '@ionic/angular';

 bootstrapApplication(AppComponent, {
  providers: [
    { 
      ...
    importProvidersFrom(IonicModule.forRoot({innerHTMLTemplatesEnabled: true})), 
      ...
  ],
});

#despues se debe compilar
# ng build

# despues de cada compilacion siempre hacer
# ionic capacitor copy android

# para ejecutarlo en android studio
# ionic capacitor run android
