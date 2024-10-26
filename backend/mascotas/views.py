from rest_framework import viewsets, permissions #permite extender la clase
from .serializers import MascotaSerializada, ImageSerializer #importamos la clase de serializacion
from .models import Mascota,ImagenesMascota #necesitamos decir los campos consultados
from rest_framework import generics
from rest_framework.pagination import PageNumberPagination



#funciones que responden al cliente creamos los crud
#CREA todo el CRUD
class MascotaView(viewsets.ModelViewSet):
        #importamos la serializacion de los datos json
        serializer_class = MascotaSerializada
        #se genera todo el crud
        queryset = Mascota.objects.all() 
        

class ImageView(viewsets.ModelViewSet):
        serializer_class = ImageSerializer
        permission_classes = [permissions.IsAuthenticated]

        def get_queryset(self):
                id_flashcard = self.request.query_params.get('id_flashcard')
                print(f"Consultando imágenes con id_flashcard: {id_flashcard}")

                # Validar el id_flashcard
                if id_flashcard:
                        try:
                                return ImagenesMascota.objects.filter(id_flashcard=id_flashcard)
                        except ImagenesMascota.DoesNotExist:
                                return ImagenesMascota.objects.none()  # Devuelve un queryset vacío si no existe
                        
                        # Devuelve todas las imágenes si no se proporciona id_flashcard
                return ImagenesMascota.objects.all()
        
class MascotaPagination(PageNumberPagination):
        page_size = 10
        page_size_query_param = 'page_size'
        max_page_size = 100
        
class MascotasList(generics.ListAPIView):
        serializer_class = MascotaSerializada
        pagination_class = MascotaPagination
        
        def get_queryset(self):
                queryset = Mascota.objects.all().order_by('?')
                mascota = self.request.query_params.get('nombre')
                if mascota is not None:
                        queryset = queryset.filter(nombre=mascota)
                return queryset
