from rest_framework import serializers
from .models import Refugio, ImageRefugio

class RefugioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Refugio
        fields = "__all__"

class ImageSerializer(serializers.ModelSerializer):
    id_refugio = serializers.PrimaryKeyRelatedField(queryset=Refugio.objects.all(), required=True)
    image_url = serializers.SerializerMethodField()  # Este campo se utilizará para devolver la URL completa de la imagen

    class Meta:
        model = ImageRefugio
        fields = "__all__"

    def get_image_url(self, obj):
        request = self.context.get('request')  # Obtenemos el request para construir la URL completa
        return request.build_absolute_uri(obj.image.url) if obj.image else None
