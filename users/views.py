from rest_framework import viewsets
from rest_framework.permissions import IsAdminUser
from users.models import Account
from serializer import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAdminUser]  # Solo los administradores pueden acceder

    # Puedes personalizar los métodos según las necesidades
