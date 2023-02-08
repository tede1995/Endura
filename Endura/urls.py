from django.contrib import admin
from django.conf.urls import include
from django.urls import path
from main import views as main

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main.urls')),
]

handler404 = 'main.views.handler404'
handler500 = 'main.views.handler500'