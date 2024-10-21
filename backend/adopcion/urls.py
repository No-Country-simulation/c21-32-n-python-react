#urls.py de la app de adopcion

from django.urls import path, include
from rest_framework import routers
from adopcion import views

#crea la instancia del router 
router = routers.DefaultRouter()
router.register(r'adopcion','views.AdopcionView',basename = 'adopcion')

#ruts para la api
urlpatterns = [
    path("adopcion/", include(router.urls)),
]
