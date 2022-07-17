from xml.etree.ElementInclude import include
from django.contrib import admin
from django.urls import path, include
from short_url.views import dashboard, generate, home, delete_shorturl

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('accounts.url')),
    path('dashboard/', dashboard, name ='dashboard'),
    path('generate/', generate, name = 'generate'),
    path('home/', home, name = 'home'),
    path('generate/', generate, name = 'generate'),
    path('delete_shorturl/', delete_shorturl, name = 'delete_shorturl'),
]


