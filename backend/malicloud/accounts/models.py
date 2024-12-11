from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser (AbstractUser):
    ROLE_CHOICES = [
        ('tenant', 'Tenant'),
        ('property_manager', 'Property Manager'),
        ('landlord', 'Landlord'),
    ]

    role = models.CharField(max_length=50, choices=ROLE_CHOICES)

    #common fields
    phone_number = models.CharField(max_length=50, blank=True, null=True)

class TenantProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='tenant_profile')

    def __str__(self):
        return self.user

class LandlordProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='landlord_profile')
    company_name = models.CharField(max_length=255)
    number_of_units = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.company_name

class PropertyManagerProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='manager_profile')
    license_number = models.CharField(max_length=50)
    experience_years = models.PositiveIntegerField()

    def __str__(self):
        return self.license_number
