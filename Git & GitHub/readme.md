# GIT


* Para inicializar un repositorio
```hs
git init
```

* Para cambiar la rama prinicipal:
```hs
git congfig --global init.defaultBranch main    -> se le da el nombre de la rama inicial
```

* Para eliminar un repositorio solamente necesitamos eliminar la carpeta que se crea con git init

```hs
DIRECTORIO DE TRABAJO -> LA CARPETA DEL PROYECTO
	MODIFICADA (MODIFIED)
AREA DE PREPARACION -> CONJUNTO DE ARCHIVOS Y CAMBIOS (PROXIMO COMMIT)
	PREPARADA (STAGED)
COMMIT -> CAMBIOS EN EL REPOSITORIO
	.GIT -> ES UN DIRECTORIO QUE CONTIENE LOS METADATOS DE LAS VERSIONES DEL PROYECTO
	CONFIRMADA (COMMITTED)
```

* Para saber el estado del repositorio:
```hs
git status
```


* Para comenzar a rastrear un archivo y a;adirlo al area de preparacion
```hs
git add index.css
git add .      -> añade todos los archivos 
```


* Para eliminar un archivo del area de preparacion
```hs
git rm --cached index.css
```

`UN COMMIT ES UN REGISTRO DEL ESTADO DE UN PROYECTO EN UN MOMENTO ESPECIFICO`

* Creando un commit
```hs
git commit -m "Agregar archivo css"      -> agregando un mensaje
git commit                               -> se nos permite escribir un txt para el mensaje del commit
```

* Mostrando el historial de commits realizados
```hs
git log
git log --oneline        -> muestra todos los detalles solo en 1 linea
git log -p 		 -> muestra el commit y las diferencias
```
	

* Para asociar un editor de texto
```hs
git config --global core.editor "code --wait"      -> para VScode
git config --global core.editor "path de lo que se quiera usar"
```


* Modificar un mensaje commit
```hs
git commit --ammend     -> no hacerlo en un proyecto con varias personas
```
	
* Revertir un commit
```hs
git reset --soft HEAD~1  -> se retrocede en 1 los commits que se realizaron
	--soft       mantiene los cambios en el archivo
	--hard       elimina los cambios en el archivo
```

`UNA RAMA (BRANCH) ES UNA LINEA INDEPENDIENTE DE DESARROLLO EN EL REPOSITORIO`
* Crear una rama (tenemos que tener en cuenta en que rama estamos ya que se creara otra rama a partir de esta)
```hs
git branch version_rama  -> se le asigna el nombre de la rama
```

* Visualizar la rama actual y las disponibles
```hs
	git branch
```

* Cambiar de rama
```hs
git checkout vesion_rama  -> se cambiara de rama a version_rama
```

* Crear rama y cambiar de rama (tenemos que tener en cuenta en que rama estamos ya que se creara otra rama a partir de esta)
```hs
git checkout -b version-python
```

* Cambiar el nombre de una rama (se cambiara el nombre de la rama actual)
```hs
git branch -m version-py
```
	
* Cambiar el nombre de otra rama
```hs
git branch -m version-py version-python  -> primero el nombre actual y luego el nombre nuevo
```
	
* Eliminar una rama (solo en git)
```hs
git branch -d version-python   
```	

```hs
fusionar/combinar (MERGE) ramas en git -> nos sirve para a;adirlos a la rama principal
 				       -> se debe estar en la rama que recibira la fusion
```
				

fusionar ramas
```hs
git merge rama_prueba    -> se le proporciona el nombre de la rama que se fusionara con la actual
git merge version_js     -> habra un conflicto que se debe solucionar
git merge --continue    -> realiza el merge luego de arreglar el conflicto
```





---


# GITHUB

ORIGIN ES EL NOMBRE ASIGNADO AL REPOSITORIO REMOTO QUE CLONAMOS


clonar un repositorio git y github (se clonara en la carpeta actual)

	git clone https://github.com /fewaofeaoif.git     -> se puede clonar con el https,ssh o githubCli


para ver el nombre del repositorio remoto

	git remote

para ver mayor informacion de origin

	git remote -v


FETCH -> BUSCAR OBTENER LOS CAMBIOS QUE SE REALIZARON EN EL REPOSITORIO REMOTO
PUSH  -> ENVIAR AL REPOSITORIO LOS CAMBIOS QUE SE REALIZARON EN EL REPOSITORIO LOCAL



enviar cambios a github

	git push origin main  -> se enviara a origin la rama main
		
		-> necesitamos configurar los credenciales en github

descargar el contenido de un repositorio remoto y actualizar inmediatamente el repositorio local

	git pull origin main  -> lo traemos de origin y lo queremos fusionar con main

verificar si hay cambios realizados en el repositorio remoto

	git fetch origin
	
		-> no se une a la rama local, para eso se requiere de un pull adicional

verificar la rama remota que contiene los cambios

	git checkout origin/main

sincronizar un repositorio con el repositorio local(crear local y subirlo a github)


	->se necesita un repositorio vacio en github?


	agregamos un repositorio remoto:
	
		git remote add origin https://github.com /fewaofeaoif.git

	
	subimos el contenido a github
	
		git push origin main


Fork -> bifurcar un repositorio remoto que no es nuestro  
Pull request  -> solicitar combinar mis cambios para contribuir con el repositorio original del proyecto


crear una rama con nombre
	
	git checkout -b nueva_rama

	podemos subir esta rama a un repo remoto

	git push origin nueva_rama




para descargar una nueva rama remota en el repositorio local

	git fetch origin
	git checkout mensaje-freecodecamp

		o tambien crear una nueva rama y hacer un pull


eliminar ramas en el repositorio local y en el remoto
		
	git branch -d mensaje-freecodecamp   -> en el local
	
	git push origin -d mensaje-freecodecamp  -> en el remoto

visualizar ramas remotas

	git branch -a
