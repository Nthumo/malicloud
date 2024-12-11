from rest_framework import serializers
from django.contrib.auth.models import User
from .models import CustomUser, TenantProfile, LandlordProfile, PropertyManagerProfile

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'

class TenantProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = TenantProfile
        fields = '__all__'

class LandlordProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = LandlordProfile
        fields = '__all__'

class PropertyManagerProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = PropertyManagerProfile
        fields = '__all__'

