from django.shortcuts import render, get_list_or_404
from django.http import JsonResponse
#from django.contrib.auth.models import User
from rest_framework.viewsets import ModelViewSet
from rest_framework import viewsets
from rest_framework.permissions import AllowAny, IsAuthenticated
from .models import CustomUser, TenantProfile, LandlordProfile, PropertyManagerProfile
from .serializers import UserSerializer, CustomUserSerializer, TenantProfileSerializer, LandlordProfileSerializer, PropertyManagerProfileSerializer

# Create your views here.


class CustomUserViewSet(ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    permission_classes = [AllowAny]

class TenantProfileViewSet(ModelViewSet):
    queryset = TenantProfile.objects.all()
    serializer_class = TenantProfileSerializer
    permission_classes = [AllowAny]

class LandlordProfileViewSet(ModelViewSet):
    queryset = LandlordProfile.objects.all()
    serializer_class = LandlordProfileSerializer
    permission_classes = [AllowAny]

class PropertyManagerProfileViewSet(ModelViewSet):
    queryset = PropertyManagerProfile.objects.all()
    serializer_class = PropertyManagerProfileSerializer
    permission_classes = [AllowAny]
