from django.urls import path
from . import views

urlpatterns = [
   path('api/qs',views.qs),
]