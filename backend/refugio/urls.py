from django.urls import path, include
from .views import ImageView, RefugioView
from rest_framework.routers import DefaultRouter
from rest_framework.documentation import include_docs_urls
from django.conf import settings
from django.conf.urls.static import static

register_router = DefaultRouter()
register_router.register(
    r'images-refugio', ImageView, basename='images_refugio')
register_router.register(r'refugio', RefugioView, basename='refugio')

urlpatterns = [
    path('refugio/', include(register_router.urls)),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
