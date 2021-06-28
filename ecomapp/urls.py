from django.urls import path

from ecomapp.views import register, fetchusers, login, insertusers,users, mens, mensproduct,w,home,homeproduct,insertitem,citem

urlpatterns = {
    path('register', register),
    path('fetchusers', fetchusers),
    path('login', login),
    path('insertusers', insertusers),
    path('users', users),
    path('mens', mens),
    path('mensproduct', mensproduct),
    path('w', w),
    path('home', home),
    path('homeproduct', homeproduct),
    path('insertitem', insertitem),
    path('citem', citem),
}

