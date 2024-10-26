from rest_framework import viewsets, permissions
from .serializers import ImageSerializer,RefugioSerializer
from .models import Refugio, ImageRefugio
# Create your views here.

class RefugioView(viewsets.ModelViewSet):
    serializer_class = RefugioSerializer
    permission_classes = [permissions.AllowAny]
    queryset = Refugio.objects.all()

class ImageView(viewsets.ModelViewSet):
    serializer_class = ImageSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        # Obtener el id_refugio de los parámetros de la solicitud
        id_refugio = self.request.query_params.get('id_refugio')
        print(f"Consultando imágenes con id_refugio {id_refugio}")

        # Si se proporciona id_refugio, filtramos las imágenes por ese id
        if id_refugio:
            return ImageRefugio.objects.filter(id_refugio=id_refugio)

        # Si no se proporciona id_refugio, devolvemos todas las imágenes
        return ImageRefugio.objects.all()