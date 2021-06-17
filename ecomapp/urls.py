from django.urls import path

from ecomapp.views import register, fetchusers, login
from src.detail import insert

urlpatterns = {
    path('register', register),
    path('fetchusers', fetchusers),
    path('login', login),
    path('insert', insert)
}

