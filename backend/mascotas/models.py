from django.db import models
# Create your models here.
#Esta clase lleva el nombre de la tabla 
#vamos a heredar la clase models
class Mascota(models.Model):
    id_mascota = models.AutoField(primary_key=True)  # Llave primaria personalizada
    nombre = models.CharField(max_length=45)
    tipo = models.CharField(max_length=45)
    descripcion = models.CharField(max_length=45)
    raza = models.CharField(max_length=45)
    peso = models.CharField(max_length=45)
    edad = models.IntegerField()
    img_home_principal = models.ImageField(max_length=100)
    img_print_mascota1 = models.ImageField(max_length=100)
    img_print_mascota2 = models.ImageField(max_length=100)
    img_print_mascota3 = models.ImageField(max_length=100)
    img_print_mascota4 = models.ImageField(max_length=100)
    estatus = models.CharField(max_length=45)
    destacada = models.CharField(max_length=45)
    id_refugio = models.IntegerField(null=True, blank=True)  # Sin clave foránea
    
    #permite guardar dependiendo del id y el nombre de la nueva mascota 
    def __str__(self):
        return f"Mascota {self.id_mascota}: {self.nombre}"