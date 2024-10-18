# urls.py en la aplicación 'registro'
from django.urls import path, include
from rest_framework import routers
from mascotas import views 

# Crear una instancia del router
router = routers.DefaultRouter()
router.register(r'mascotas', views.MascotaView, basename='mascotas')

# Definir las rutas de la API
urlpatterns = [
    path("api/v1/", include(router.urls)),  # Agregar la barra inclinada al final
]