# registro/serializers.py
from rest_framework import serializers
from .models import Mascota, ImagenesMascota

class MascotaSerializada(serializers.ModelSerializer):
    class Meta:
        model = Mascota
        fields = '__all__'
        
class ImageSerializer(serializers.ModelSerializer):
    id_mascota = serializers.PrimaryKeyRelatedField(queryset=Mascota.objects.all(), required=True)
    
    class Meta:
        model = ImagenesMascota
        fields = "__all__"
    
    def validate(self, data):
        print(data)
        return data 
    
    # Método para obtener la URL de la imagen
    def get_image_url(self, obj):
        request = self.context.get('request')  # Obtenemos el request para construir la URL completa
        return request.build_absolute_uri(obj.image.url) if obj.image else None
    