from django.urls import path
from . import views

urlpatterns = [
    path('', views.signup, name = 'signup'),
    path('login/', views.login, name = "login"),
    path('signup/', views.signup, name = "signup"),
    path('delete_user/', views.delete_user, name = "delete_user"),
]