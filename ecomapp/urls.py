from django.urls import path

from ecomapp.views import register, fetchusers, login, insert, mens, mensproduct,w,home,homeproduct

urlpatterns = {
    path('register', register),
    path('fetchusers', fetchusers),
    path('login', login),
    path('insert', insert),
    path('mens', mens),
    path('mensproduct', mensproduct),
    path('w', w),
    path('home', home),
    path('homeproduct', homeproduct),
}

