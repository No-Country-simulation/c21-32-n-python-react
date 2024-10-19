from django.urls import include, path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework.documentation import include_docs_urls

urlpatterns = [
    # Url para acceder a la api de users
    path('v1/', include('users.urls')),
    path('v1/', include('mascotas.urls')),
    path('docs/', include_docs_urls(title='Context Capture API')),
    # Para obtener el token de acceso y refresco
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # Para refrescar el token
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),   
]