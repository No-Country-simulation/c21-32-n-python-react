from rest_framework import viewsets
from users.models import Account
from .serializer import UserSerializer, LoginUserSerializer
from rest_framework.permissions import AllowAny
from rest_framework import status
from rest_framework.response import Response
from django.utils import timezone
from rest_framework.exceptions import ValidationError
from rest_framework_simplejwt.tokens import RefreshToken



class UserViewSet(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
    
    def create(self, request, *args, **kwargs):
        
        #Verifica si el email ya esta en uso
        if Account.objects.filter(email=request.data['email']).exists():
            return Response({'error': 'Email already exists'}, status=status.HTTP_400_BAD_REQUEST) 
        
        #Verifiica si el username ya esta en uso
        if Account.objects.filter(username=request.data['username']).exists():
            return Response({'error': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)
        
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
class LoginUserViewSet(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = LoginUserSerializer
    permission_classes = [AllowAny]
    
    def create(self, request, *args, **kwargs):
        
        try:
            #Serializa los datos de inicio de sesion
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            user = serializer.validated_data['user']
            
            #Actuliza la fecha del ultimo inicio de sesion
            user.last_login = timezone.now()
            user.save()
            
            #Genera el token JWT
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            }, status=status.HTTP_200_OK)
        except ValidationError as e:
            # Maneja errores de validación
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            # Maneja otros errores genéricos
            return Response({'error': 'An unexpected error occurred.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            