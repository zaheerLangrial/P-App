from django.urls import path
from .views import *

urlpatterns = [
    path('get_fav_name_msgs/', Get_FavName_Msgs.as_view()),
    path('get_reason_list/', Get_Reason_List_View.as_view()),
    
]