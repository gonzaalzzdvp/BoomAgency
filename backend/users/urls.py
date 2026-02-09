from django.urls import path
from .views import register, login, profile, logout, csrf, CookieTokenRefreshView

urlpatterns = [
    path('register/', register),
    path('login/', login),
    path('logout/', logout),
    path('profile/', profile),
    path('refresh/', CookieTokenRefreshView.as_view()),
    path('csrf/', csrf),

]