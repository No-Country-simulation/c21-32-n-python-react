# registro/serializers.py
from rest_framework import serializers
from .models import Mascota

class MascotaSerializada(serializers.ModelSerializer):
    class Meta:
        model = Mascota
        fields = '__all__'