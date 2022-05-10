from django.urls import path
from . import views

urlpatterns = [
    path('create-user/', views.CreateAccount.as_view(), name='create-user'),
]