from django.urls import path
from . import views

urlpatterns = [
    path('task-list/', views.TaskList.as_view(), name='task-list'),
    path('task-details/<str:pk>/', views.TaskDetails.as_view(), name='task-details'),
    path('task-create', views.TaskCreate.as_view(), name='task-create'),
    path('task-update/<str:pk>/', views.TaskUpdate.as_view(), name='task-update'),
    path('task-delete/<str:pk>/', views.TaskDelete.as_view(), name='task-delete'),
    path('jwt-details/', views.JwtDetails.as_view(), name='jwt-details')
]