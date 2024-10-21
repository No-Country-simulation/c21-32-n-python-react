from django.db import models
from mascotas.models import Mascota
from users.models import Account
from refugio.models import Refugio

# Create your models here.
class Adopcion(models.Model):
    id_adopcion = models.AutoField(primary_key=True)
    id_mascota = models.ForeignKey(Mascota,on_delete=models.CASCADE,null=True,blank=True)
    estatus = models.CharField(max_length=50)
    fecha = models.DateField()
    
    #falta aplicar FK 
    id_refugio = models.ForeignKey(
        Refugio,
        on_delete=models.CASCADE,
        null=True)
    
    id_solicitante = models.ForeignKey(
        Account,
        on_delete=models.CASCADE,
        null=True,
        related_name='adopciones_solicitadas')
    
    id_operador = models.ForeignKey(
        Account,
        on_delete=models.CASCADE,
        null=True,
        related_name='adopciones_atendidas')
    observaciones = models.TextField()
    

    
    def __str__(self):
        return f"Adopcion {self.id_adopcion}: Mascota {self.id_mascota}: Usuario {self.id_solicitante} : Usuario {self.id_operador}"