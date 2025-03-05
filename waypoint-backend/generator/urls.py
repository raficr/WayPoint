# generator/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.generate_holiday, name='generate_holiday'),
    path('get_more_info/', views.get_more_info, name='get_more_info'),
]
