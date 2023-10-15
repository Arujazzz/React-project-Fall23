from django.urls import path
from .views import register_user,login_user,get_request,get_request_job_titles

app_name = 'Rauan'
urlpatterns = [
   path('register/', register_user, name='register'),
   path('login/', login_user, name='login'),
   path('get_request/',get_request,name='get_reguest'),
   path('get_request_job_titles/',get_request_job_titles,name='get_reguest_job_titles'),
   

]