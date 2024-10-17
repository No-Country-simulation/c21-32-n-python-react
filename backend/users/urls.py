from django.urls import path, include
from .views import LoginUserViewSet, UserViewSet
from rest_framework.routers import DefaultRouter
from rest_framework.documentation import include_docs_urls

register_router = DefaultRouter()
register_router.register(
    r'register', UserViewSet, basename='e-register')
register_router.register(r'login', LoginUserViewSet, basename='e-login')

urlpatterns = [
    path('email/', include(register_router.urls)),
]