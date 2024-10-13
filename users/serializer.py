from rest_framework import serializers
from django.contrib.auth.models import Group
from users.models import Account

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = Account
        fields = ('email', 'password', 'is_active', 'is_admin')

    def create(self, validated_data):
        """Crea un nuevo usuario con el password encriptado"""
        user = Account(
            email=validated_data['email'],
            is_active=validated_data.get('is_active', True),
            is_admin=validated_data.get('is_admin', False),
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

    def update(self, instance, validated_data):
        """Actualiza un usuario existente y encripta el password si se proporciona"""
        instance.email = validated_data.get('email', instance.email)
        if 'password' in validated_data:
            instance.set_password(validated_data['password'])
        instance.is_active = validated_data.get('is_active', instance.is_active)
        instance.is_admin = validated_data.get('is_admin', instance.is_admin)
        instance.save()
        return instance
