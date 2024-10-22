from django.db import models
from refugio.models import Refugio
from datetime import datetime

# Create your models here.
#Esta clase lleva el nombre de la tabla 
#vamos a heredar la clase models
class Mascota(models.Model):

    class Type(models.IntegerChoices):
        CAT = 1, "Gato"
        DOG = 2, "Perro"
    class Status(models.IntegerChoices):
        Disponible = 1, "Disponible"
        EnProceso = 2, "En Proceso"
        Adpotada = 3, "Adoptada"
    class Sex(models.TextChoices):
        Femenino = "F", "Femenino"
        Masculino = "M", "Masculino"
        
    id_mascota = models.AutoField(primary_key=True)  # Llave primaria personalizada
    nombre = models.CharField(max_length=45)
    tipo = models.PositiveSmallIntegerField(choices=Type.choices,default=Type.CAT)
    descripcion = models.TextField(max_length=100)
    raza = models.CharField(max_length=45)
    peso = models.DecimalField(max_digits=5, decimal_places=2)
    edad = models.IntegerField()
    Sexo = models.CharField(max_length=1,choices=Sex.choices,default=Sex.Femenino)
    img_home_principal = models.ImageField(max_length=100)
    img_print_mascota = models.ImageField(max_length=100)
    estatus = models.PositiveSmallIntegerField(choices=Status.choices,default=Status.Disponible)    
    destacada = models.BooleanField(default=False)    
    fecha_refugio = models.DateField(default=datetime.today)
    #falta aplicar FK 
    id_refugio = models.ForeignKey(Refugio, on_delete=models.CASCADE)
    
    
    #permite guardar dependiendo del id y el nombre de la nueva mascota 
    def __str__(self):
        return f"Mascota {self.id_mascota}: {self.nombre}"
    
