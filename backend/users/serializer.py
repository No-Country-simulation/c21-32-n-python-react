from rest_framework import serializers
from django.contrib.auth.models import Group
from users.models import Account
from django.contrib.auth import authenticate


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
    
class LoginUserSerializer(serializers.ModelSerializer):
    
    email = serializers.EmailField()
    password = serializers.CharField(max_length=20, write_only=True)
    
    class Meta:
        model = Account
        fields = ('email', 'password')
        
    def validate(self, data):
        """Verifica que el usuario exista y la contraseña sea correcta"""
        email = data.get("email")
        password = data.get("password")
        
        if email and password:
            user = authenticate(email=email, password=password)
            if user:
                if user.is_active:
                    data['user'] = user
                else:
                    raise serializers.ValidationError("Usuario inactivo")
            else:
                raise serializers.ValidationError("Credenciales inválidas")
        else:
            raise serializers.ValidationError("Debe proporcionar un email y una contraseña")
        return data
