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
    #Datos de la encuesta 

    #falta aplicar FK 
    id_refugio = models.ForeignKey(Refugio,on_delete=models.CASCADE,null=True)    
    id_solicitante = models.ForeignKey(Account,on_delete=models.CASCADE,null=True,related_name='adopciones_solicitadas')    
    id_operador = models.ForeignKey(Account, on_delete=models.CASCADE,null=True,related_name='adopciones_atendidas')
    observaciones = models.TextField()
    class population(models.TextChoices):
        op1 = "1", "Solo yo"
        op2 = "2", "2 a 5"
        op3 = "3", "5 ó mas"
    Habitantes = models.CharField(max_length=1,choices=population.choices,default=population.op1)
    acepfamily = models.BooleanField(default=False)  
    espaciolibre = models.BooleanField(default=False)  
    cerco = models.BooleanField(default=False)  
    conocuidado = models.BooleanField(default=False)  
    animalescasa = models.BooleanField(default=False) 
    vacunados = models.BooleanField(default=False) 
    class moving(models.TextChoices):   
        op1 = "1", "Llevarlo conmigo"
        op2 = "2", "Buscarle un nuevo hogar"
        op3 = "3", "Dejarlo con un familiar o amigo"
        op4 = "4", "Entregarlo a un refugio"
        op5 = "5", "Abandonarlo"
    mudanza = models.CharField(max_length=1,choices=moving.choices,default=moving.op1)
    class motive(models.TextChoices):   
        op1 = "1", "Por o para mis hijos"
        op2 = "2", "Porque me gustan los animales"
        op3 = "3", "Para regalar"
        op4 = "4", "Por la compañía"        
    motivo = models.CharField(max_length=1,choices=motive.choices,default=motive.op1)
    class space(models.TextChoices):   
        op1 = "1", "Acceso a toda la casa"
        op2 = "2", "Acceso restringido a algunos espacios"
        op3 = "3", "Solo en mi habitación"        
    espacio = models.CharField(max_length=1,choices=space.choices,default=space.op1)

    
    def __str__(self):
        return f"Adopcion {self.id_adopcion}: Mascota {self.id_mascota}: Usuario {self.id_solicitante} : Usuario {self.id_operador}"