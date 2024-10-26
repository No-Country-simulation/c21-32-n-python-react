# urls.py en la aplicación 'registro'
from django.urls import path, include
from rest_framework import routers
from mascotas import views 
from django.conf import settings
from django.conf.urls.static import static

# Crear una instancia del router
router = routers.DefaultRouter()
router.register(r'mascotas', views.MascotaView, basename='mascotas')
router.register(r'images', views.ImageView, basename='Image')

# Definir las rutas de la API
urlpatterns = [
    path("pets/", include(router.urls)),  
    # Agregar la barra inclinada al final
    path('pets/search/', views.MascotasList.as_view(), name='user-profile'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)









