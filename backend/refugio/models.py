from django.db import models

# Create your models here.


class Refugio(models.Model):
    
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, unique=True, null=True, blank=False)
    dirlogo = models.CharField(max_length=50)
    Horario_atencion = models.TimeField(max_length=50, null=True, blank=False)
    direccion = models.CharField(max_length=50, null=True, blank=False)
    telefono = models.CharField(max_length=50, null=True, blank=False)
    mision = models.TextField(max_length=100)
    vision = models.TextField(max_length=100)
    
    def __str__(self):
        return self.nombre

class ImageRefugio(models.Model):
    id_refugio = models.ForeignKey(Refugio, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='images/', null=True, blank=False)
    
    def __str__(self):
        return self.id_refugio.name 