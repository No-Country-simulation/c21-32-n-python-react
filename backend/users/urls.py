from django.urls import path, include
from .views import LoginUserViewSet, UserViewSet, UserProfileView
from rest_framework.routers import DefaultRouter
from rest_framework.documentation import include_docs_urls

register_router = DefaultRouter()
register_router.register(
    r'register', UserViewSet, basename='e-register')
register_router.register(r'login', LoginUserViewSet, basename='e-login')

urlpatterns = [
    path('user/', include(register_router.urls)),
    path('user/profile/', UserProfileView.as_view(), name='user-profile'),
]