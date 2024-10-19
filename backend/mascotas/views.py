from rest_framework import viewsets #permite extender la clase
from .serializers import MascotaSerializada #importamos la clase de serializacion
from .models import Mascota #necesitamos decir los campos consultados


#funciones que responden al cliente creamos los crud
#CREA todo el CRUD
class MascotaView(viewsets.ModelViewSet):
    #importamos la serializacion de los datos json
    serializer_class = MascotaSerializada
    #se genera todo el crud
    queryset = Mascota.objects.all() 