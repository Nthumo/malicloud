from django.urls import path, include;
from rest_framework.routers import DefaultRouter
from django.conf.urls.static import static
from django.conf import settings
from .views import (CustomUserViewSet, TenantProfileViewSet, LandlordProfileViewSet, PropertyManagerProfileViewSet)

router = DefaultRouter()

router.register(r'custom-user', CustomUserViewSet)
router.register(r'tenant-profile', TenantProfileViewSet)
router.register(r'landlord', LandlordProfileViewSet)
router.register(r'property-manager', PropertyManagerProfileViewSet)

urlpatterns = [
    path('', include(router.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)