# api/urls.py
from django.urls import path
from .views import ValidateMySQLConnectionView

urlpatterns = [
    path('validate-mysql-connection/', ValidateMySQLConnectionView.as_view(), name='validate-mysql-connection'),
]
